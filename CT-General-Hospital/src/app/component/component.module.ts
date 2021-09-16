import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminNavComponent } from './admin/admin-nav/admin-nav.component';
import { AdmincontentComponent } from './admin/admincontent/admincontent.component';
import { UserManagementComponent } from './admin/user-management/user-management.component';
import { PatientManagementComponent } from './admin/patient-management/patient-management.component';



@NgModule({
  declarations: [
    AdminNavComponent,
    AdmincontentComponent,
    UserManagementComponent,
    PatientManagementComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentModule { }
