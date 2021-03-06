import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ApplicationListComponent } from './components/application-list/application-list.component';
import { AuthGuard } from './auth.guard';


// Module repsonsible for handling frontend routing by linking the possible paths to respective component.
// The list 'routes' contains all possible routes. 'login' redirects to the LoginComponent etc.
// AuthGuard (@see ./auth.guard.ts) is used for blocking non authorized users from viewing the pages which
// have a restiction related to it.
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'appList', component: ApplicationListComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
