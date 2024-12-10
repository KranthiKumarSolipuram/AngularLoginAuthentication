import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { AuthenticationLayoutComponent } from './layouts/authentication-layout/authentication-layout.component';
import { AUTHENTICATION_ROUTES } from './routing/authetication-routing';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ADMIN_ROUTES } from './routing/admin-routing';

const routes: Routes = [
  {path:'', component:AuthenticationLayoutComponent, children: AUTHENTICATION_ROUTES},
  {path:'admin', component:AdminLayoutComponent, children: ADMIN_ROUTES},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
