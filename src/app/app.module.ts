import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {SignupComponent} from './auth/signup/signup.component';
import {LoginComponent} from './auth/login/login.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {NgxWebstorageModule} from "ngx-webstorage";
import {HomeComponent} from './home/home.component';
import {TokenInterceptor} from "./token-interceptor";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {PostComponent} from './page-component/post/post.component';
import {VoteComponent} from './page-component/vote/vote.component';
import {CreatePostComponent} from './post/create-post/create-post.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {UserProfileComponent} from './user-profile/user-profile.component';
import {PostsByTagComponent} from './posts-by-tag/posts-by-tag.component';
import {UserInformationComponent} from './user-information/user-information.component';
import { PatchPostComponent } from './post/patch-post/patch-post.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    PostComponent,
    VoteComponent,
    CreatePostComponent,
    UserProfileComponent,
    PostsByTagComponent,
    UserInformationComponent,
    PatchPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxWebstorageModule.forRoot(),
    FontAwesomeModule,
    NgbModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
