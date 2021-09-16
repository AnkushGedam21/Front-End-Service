import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminserviceService } from 'src/app/services/adminservice.service';
import { LoginserviceService } from 'src/app/services/loginservice.service';
import { User } from 'src/app/utility/user.model';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css'],
})
export class UserManagementComponent implements OnInit {
  user: User | null = null;
  displayedColumns: string[] = [
    'empId',
    'staffname',
    'createdOn',
    'status',
    'editstatus',
  ];
  dataSource: MatTableDataSource<User>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

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
    // Assign the data to the data source for the table to render
  }
  refreshList(){
    this.ngOnInit();
  }

  loadUser() {
    this.adminService.getAllUsers()
    .subscribe(
      (data) => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error =>{
        console.log(error);
      }
    )
    // this.adminService.getAllUsers().subscribe((listOfUsers) => {
    //   this.allUser = listOfUsers;
    //   this.dataSource = new MatTableDataSource(this.allUser);
    //   this.toastr.success('All Data loaded successfully');
    //   this.dataSource.paginator = this.paginator;
    //   console.log(this.allUser)
    // });
  }

  // ngAfterViewInit() {
  //   this.loadUser();
  //   this.dataSource.paginator = this.paginator;
  //   this.dataSource.sort = this.sort;
  // }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  acivateUser(staffId: number) {
    alert("Method called")
    this.adminService.activateUser(staffId);
    this.refreshList();
  }
  deactivateUser(staffId: number) {
    alert("Method called")
    this.adminService.deactivateUser(staffId);
    this.refreshList();
  }
  blockedUser(staffId: number) {
    this.adminService.blockedUser(staffId);
    this.refreshList();
  }
}
