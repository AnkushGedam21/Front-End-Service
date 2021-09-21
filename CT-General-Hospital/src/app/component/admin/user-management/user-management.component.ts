import {
  AfterViewInit,
  Component,
  ViewChild,
  OnInit,
  ElementRef,
  Pipe,
  PipeTransform,
} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatPaginator } from '@angular/material/paginator';
import { ToastrService } from 'ngx-toastr';
import { AdminserviceService } from 'src/app/services/adminservice.service';
import { LoginserviceService } from 'src/app/services/loginservice.service';
import { User } from 'src/app/utility/user.model';
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
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css'],
})
export class UserManagementComponent implements OnInit {
  user: User | null = null;
  allEmployee: User[];
  currentContact?: null;
  currentIndex = -1;
  id = '';
  p = 1;
  index: number;
  newrecord: number = 5;
  value = 5;
  key: string = 'id';
  reverse: boolean = false;
  staffId: number;
  allStaffId: number[] = [];
  allStaffStatus: string[] = [];
  disableSelect = new FormControl(true);
  matcher = new MyErrorStateMatcher();
  selectedValue: string;
  allStatus: Status[] = [
    { value: 'active', viewValue: 'Activate' },
    { value: 'deactive', viewValue: 'Deactivate' },
    { value: 'block', viewValue: 'Blocked' },
  ];

  @ViewChild('RecordNumber', { static: false }) recordnum: ElementRef;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(
    private adminService: AdminserviceService,
    private toastr: ToastrService,
    private loginService: LoginserviceService
  ) {}
  ngOnInit() {
    this.loadUser();
    this.loginService.userInfo.subscribe((user: any) => {
      this.user = user;
    });
  }
  refreshList() {
    this.loadUser();
    this.currentContact = null;
    this.currentIndex = -1;
  }

  loadUser() {
    this.adminService.getAllUsers().subscribe(
      (data) => {
        this.allEmployee = data;
        this.toastr.success('All Data Loaded');
      },
      (error) => {
        console.log(error);
      }
    );
  }
  setActiveContact(employee: User, index: number): void {
    this.currentContact = undefined;
    this.currentIndex = index;
  }

  sort(key: any) {
    this.key = key;
    this.reverse = !this.reverse;
  }

  changeRecord(value: any) {
    this.newrecord = value;
  }
  selected = new FormControl('selected.value', [
    Validators.pattern('selected.value'),
  ]);
  onClick(i: number) {
    this.index = i;
    this.disableSelect = new FormControl(!this.disableSelect.value);
  }
  changeStatus() {
    this.adminService
      .editEmployeeStatus(this.allStaffId, this.allStaffStatus)
      .subscribe((data) => {
        console.log(data);
      });
  }
  addValues(patientId: number) {
    this.allStaffId.push(patientId);
    this.allStaffStatus.push(this.selectedValue);
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;

    console.log(filterValue);
  }
}
