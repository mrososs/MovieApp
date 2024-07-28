import {
  ChangeDetectorRef,
  Component,
  inject,
  Inject,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { isPlatformBrowser, NgIf } from '@angular/common';
import { AuthServicesService } from '../../services/auth-services.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, NgIf, HttpClientModule],
  providers: [AuthServicesService],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  signInCheck: boolean = false;
  route = inject(Router);
  constructor(
    private auth: AuthServicesService,
    private cdRef: ChangeDetectorRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    this.auth.signInCheck$.subscribe((status) => {
      this.signInCheck = status;
      this.cdRef.detectChanges(); // Trigger change detection
    });
    if (isPlatformBrowser(this.platformId)) {
      if (localStorage.getItem('signInStatus') === 'true') {
        this.signInCheck = true;
        this.cdRef.detectChanges(); // Trigger change detection
      }
    }
  }

  signOut() {
    this.signInCheck = false;
    this.auth.setSignInStatus(false);
    if (isPlatformBrowser(this.platformId)) {
      if (localStorage.getItem('signInStatus') === 'true') {
        this.signInCheck = false;
      }
    }

    this.route.navigate(['login']);
  }
}
