import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './component/admin/admin.component';
import { PatientManagementComponent } from './component/admin/patient-management/patient-management.component';
import { UserManagementComponent } from './component/admin/user-management/user-management.component';
import { LoginComponent } from './component/user/login/login.component';

const routes: Routes = [
  {path :'', pathMatch :'full', redirectTo: 'login'},
  {path : 'login', component:LoginComponent},
  {path : 'admin', component : AdminComponent},
  {path : 'patient-details', component : PatientManagementComponent},
  {path : 'user-details', component: UserManagementComponent},
  {path : 'admin/patient-details', component:PatientManagementComponent},
  {path : 'admin/user-details', component:UserManagementComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
