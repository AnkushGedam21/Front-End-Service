import { Component, OnInit } from '@angular/core';

declare const hide: any;
@Component({
  selector: 'app-admin-nav',
  templateUrl: './admin-nav.component.html',
  styleUrls: ['./admin-nav.component.css']
})
export class AdminNavComponent implements OnInit {

  adminname : string = "Admin Name";
  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    hide();
  }
}
