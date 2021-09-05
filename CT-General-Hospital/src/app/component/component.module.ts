import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminNavComponent } from './admin/admin-nav/admin-nav.component';
import { AdmincontentComponent } from './admin/admincontent/admincontent.component';



@NgModule({
  declarations: [
    AdminNavComponent,
    AdmincontentComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentModule { }
