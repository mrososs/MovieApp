import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthServicesService {
  private apiKey = 'fe859f12cb86039c8cdd8af088e439c5';
  private baseUrl = 'https://api.themoviedb.org/3';
  private signInCheckSubject = new BehaviorSubject<boolean>(false);
  signInCheck$ = this.signInCheckSubject.asObservable();

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}
  private hasToken():any {
    if (isPlatformBrowser(this.platformId)) {
      if(localStorage.getItem('signInStatus')=="true"){
        return true;
      }
    }else{
      return false;
    }
    
  }

  isSignedIn(): boolean {
    return this.hasToken();
  }

  setSignInStatus(status: boolean): void {
    this.signInCheckSubject.next(status);
    localStorage.setItem('signInStatus', JSON.stringify(status));
  }

  createRequestToken(): Observable<any> {
    return this.http.get(
      `${this.baseUrl}/authentication/token/new?api_key=${this.apiKey}`
    );
  }

  validateRequestToken(
    username: string,
    password: string,
    requestToken: string
  ): Observable<any> {
    return this.http.post(
      `${this.baseUrl}/authentication/token/validate_with_login?api_key=${this.apiKey}`,
      {
        username: username,
        password: password,
        request_token: requestToken,
      }
    );
  }

  createSession(requestToken: string): Observable<any> {
    return this.http.post(
      `${this.baseUrl}/authentication/session/new?api_key=${this.apiKey}`,
      {
        request_token: requestToken,
      }
    );
  }
}
