import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './component/admin/admin.component';
import { LoginComponent } from './component/user/login/login.component';

const routes: Routes = [
  {path :'', pathMatch :'full', redirectTo: 'login'},
  {path : 'login', component:LoginComponent},
  {path : 'admin', component : AdminComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
