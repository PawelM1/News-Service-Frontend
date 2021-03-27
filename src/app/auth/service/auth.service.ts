import {EventEmitter, Injectable, Output} from '@angular/core';
import {SignupRequestPayload} from "../signup/signup-request.payload";
import {HttpClient} from "@angular/common/http"
import {Observable} from "rxjs";
import {LoginRequestPayload} from "../login/login-request.payload";
import {LocalStorageService} from "ngx-webstorage";
import {map} from "rxjs/operators";
import {LoginResponse} from "../login/login-response.payload";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  @Output() loggedIn: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() username: EventEmitter<string> = new EventEmitter<string>();

  constructor(private httpClient: HttpClient, private localStorage: LocalStorageService) {
  }

  signup(signupRequestPayload :SignupRequestPayload): Observable<any>{
    return this.httpClient.post('https://news-servvice.herokuapp.com/api/auth/register', signupRequestPayload, {responseType: 'text'});
  }

  login(loginRequestPayload: LoginRequestPayload): Observable<boolean>{
    return this.httpClient.post<LoginResponse>('https://news-servvice.herokuapp.com/api/auth/login', loginRequestPayload)
      .pipe(map(data => {
        this.localStorage.store('authenticationToken', data.authenticationToken);
        this.localStorage.store('username', data.username);
        this.localStorage.store('email', data.email);

        this.loggedIn.emit(true);
        this.username.emit(data.username);

        return true;
      }));
  }

  getAuthToken() {
    return this.localStorage.retrieve('authenticationToken');
  }

  isLoggedIn(): boolean{
    return this.getAuthToken() != null;
  }

  getUsername(): string{
    return this.localStorage.retrieve('username');
  }

  logout() {
    this.localStorage.clear();
    this.localStorage.clear('authenticationToken');
    this.localStorage.clear('username');
    this.localStorage.clear('email');
  }

}
