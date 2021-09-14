import { Component, OnInit } from '@angular/core';
// import{FormBuilder,FormGroup} from '@angular/forms';
@Component({
  selector: 'employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})
export class EmployeeDashboardComponent implements OnInit {

  // formValue !:FormGroup;

  constructor() { }

  ngOnInit(): void {
    // this.formValue=this.formbuilder.group({
    //   firstname:[''],
    //   lastname:[''],
    //   email:[''],
    //   mbl:[''],
    //   salary:['']
    // })
  }

}
