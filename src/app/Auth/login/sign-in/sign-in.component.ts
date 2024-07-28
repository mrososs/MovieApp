import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthServicesService } from '../../../services/auth-services.service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [HttpClientModule, ReactiveFormsModule, RouterModule],
  providers: [AuthServicesService],
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  signInForm!: FormGroup;

  constructor(
    private auth: AuthServicesService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.signInForm = this.fb.group({
      userName: [''],
      password: [''],
    });
  }

  signIn() {
    const { userName, password } = this.signInForm.value;

    this.auth.createRequestToken().subscribe((tokenData) => {
      const requestToken = tokenData.request_token;

      this.auth
        .validateRequestToken(userName, password, requestToken)
        .subscribe((validatedData) => {
          if (validatedData.success) {
            this.auth.createSession(requestToken).subscribe((sessionData) => 
              {
              const sessionId = sessionData.session_id;
              this.router.navigate(['home']);
              location.reload();

              this.auth.setSignInStatus(true);
              console.log('Session ID:', sessionId);
            });
          } else {
            console.error('Token validation failed');
          }
        });
    });
  }
}
