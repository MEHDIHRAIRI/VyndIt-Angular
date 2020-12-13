import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { DetailedComponent } from './detailed/detailed.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { IndexUserComponent } from './index-user/index-user.component';
import { IndexComponent } from './index/index.component';
import { ProfileComponent } from './profile/profile.component';
import { AddStoreComponent } from './store/add-store/add-store.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'reset-password', component: ResetPasswordComponent},
  {path: '', component: IndexComponent},
  {path: 'index-user', component: IndexUserComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'profile/:username', component: ProfileComponent},
  {path: 'edit', component: EditProfileComponent},
  {path: ':username', component: ProfileComponent},
  {path: 'delete/user/:id', component: DeleteUserComponent},
  {path: 'update/user/:id', component: EditProfileComponent},
  {path: 'index-user/addstore', component: AddStoreComponent},
  {path: 'detailed/:id', component: DetailedComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
