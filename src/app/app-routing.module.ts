import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'users', component: UserComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];
// ,canActivate: [AuthGuard] 

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
