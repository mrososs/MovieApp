import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { SignInComponent } from './Auth/login/sign-in/sign-in.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthServicesService } from './services/auth-services.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SignInComponent, HttpClientModule],
  providers: [AuthServicesService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'movie-app';
}
