import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { IndexUserComponent } from './index-user/index-user.component';
import { ProfileComponent } from './profile/profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { AddStoreComponent } from './store/add-store/add-store.component';
import { DetailedComponent } from './detailed/detailed.component';
import { SeachstorePipe } from './seachstore.pipe';
import { ToastrModule } from 'ngx-toastr';
import { NavDefaultComponent } from './nav-default/nav-default.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    RegisterComponent,
    LoginComponent,
    ResetPasswordComponent,
    IndexUserComponent,
    ProfileComponent,
    EditProfileComponent,
    DeleteUserComponent,
    AddStoreComponent,
    DetailedComponent,
    SeachstorePipe,
    NavDefaultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    ToastrModule.forRoot()
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
