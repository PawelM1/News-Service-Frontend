import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SignupComponent} from "./auth/signup/signup.component";
import {LoginComponent} from "./auth/login/login.component";
import {HomeComponent} from "./home/home.component";
import {CreatePostComponent} from "./post/create-post/create-post.component";
import {UserProfileComponent} from "./user-profile/user-profile.component";
import {AuthGuard} from "./auth/guard/auth.guard";
import {PostsByTagComponent} from "./posts-by-tag/posts-by-tag.component";
import {UserInformationComponent} from "./user-information/user-information.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'create-post', component: CreatePostComponent, canActivate:[AuthGuard]},
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent},
  {path: 'user-profile/:username', component: UserProfileComponent, canActivate:[AuthGuard]},
  {path: 'user/:username', component: UserInformationComponent},
  {path: 'tag/:tagName', component: PostsByTagComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
