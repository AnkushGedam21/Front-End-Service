import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './component/admin/admin.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { PatientComponent } from './component/patient/patient.component';
import { UserComponent } from './component/user/user.component';
import { SchedullingComponent } from './component/schedulling/schedulling.component';
import { InboxComponent } from './component/inbox/inbox.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './component/user/login/login.component';
import { AngularMaterialModule } from './angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar';
import {HttpClientModule} from '@angular/common/http';
import {MatInputModule} from '@angular/material/input';
import { AdminNavComponent } from './component/admin/admin-nav/admin-nav.component';
import { AdmincontentComponent } from './component/admin/admincontent/admincontent.component';
import {  ChartModule } from 'primeng/chart';
import { UserManagementComponent } from './component/admin/user-management/user-management.component';
import { PatientManagementComponent } from './component/admin/patient-management/patient-management.component';
import { CdkColumnDef } from '@angular/cdk/table';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Routes } from '@angular/router';
const routes: Routes = [
  
];

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HeaderComponent,
    FooterComponent,
    PatientComponent,
    UserComponent,
    SchedullingComponent,
    InboxComponent,
    LoginComponent,
    AdminNavComponent,
    AdmincontentComponent,
    UserManagementComponent,
    PatientManagementComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    ToastrModule.forRoot(),
    ChartModule,
    Ng2SearchPipeModule,
    FlexLayoutModule
   
  ],
  providers: [CdkColumnDef],
  bootstrap: [AppComponent]
})
export class AppModule { }
