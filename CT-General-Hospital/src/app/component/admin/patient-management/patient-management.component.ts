import { tap } from 'rxjs/operators';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { AdminserviceService } from 'src/app/services/adminservice.service';
import { LoginserviceService } from 'src/app/services/loginservice.service';
import { Patient } from 'src/app/utility/patient.model';
import { User } from 'src/app/utility/user.model';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl): boolean {
    return !!control;
  }
}
interface Status {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-patient-management',
  templateUrl: './patient-management.component.html',
  styleUrls: ['./patient-management.component.css'],
})
export class PatientManagementComponent implements OnInit {
  user: User | null = null;
  allPatients: Patient[] = [];
  displayedColumns: string[] = [
    'patientId',
    'firstName',
    'createdOn',
    'status',
    'editstatus',
  ];
  dataSource: MatTableDataSource<Patient>;
  patienId: number;
  tempId: number;
  id: number = 0;
  allPatientId: number[] = [];
  allPatientStatus: string[] = [];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  disableSelect = new FormControl(true);
  matcher = new MyErrorStateMatcher();
  selectedValue: string;
  allStatus: Status[] = [
    { value: 'active', viewValue: 'Activate' },
    { value: 'deactive', viewValue: 'Deactivate' },
    { value: 'block', viewValue: 'Blocked' },
  ];
  constructor(
    private adminService: AdminserviceService,
    private toastr: ToastrService,
    private loginService: LoginserviceService
  ) {}
  selected = new FormControl('selected.value', [
    Validators.pattern('selected.value'),
  ]);
  ngOnInit(): void {
    this.loadPatient();
    this.toastr.success('All Data loaded successfully');
    this.loginService.userInfo.subscribe((user) => {
      this.user = user;
    });
  }
  
  addValues(patientId: number) {
    this.allPatientId.push(patientId);
    this.allPatientStatus.push(this.selectedValue);
  }

  refreshList() {
    this.ngOnInit();
  }
  onClick(i: number) {
    this.id = i;
    this.disableSelect = new FormControl(!this.disableSelect.value);
  }
  loadPatient() {
    this.adminService.getAllPatient().subscribe(
      (data) => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;

    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  changeStatus() {
    this.allPatientId.forEach((element) => {
      console.log(element);
    });
    this.adminService
      .editPatientStatus(this.allPatientId, this.allPatientStatus)
      tap((data) => {
              console.log(data);
             this.loadPatient();
           }),
        (error :any) => {
         console.log(error);
         this.loadPatient();
         };
      }
  // acivatePatient(patientId: number) {
  //   this.adminService.activatePatient(patientId).subscribe(
  //     tap((data) => {
  //       console.log(data);
  //       this.loadPatient();
  //     }),
  //     (error) => {
  //       console.log(error);
  //       this.loadPatient();
  //     }
  //   );
  // }
  
}

/** Builds and returns a new User. */
