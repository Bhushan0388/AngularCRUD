import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { EmployeeModal } from './employee-dashboard-modal-data';

@Component({
  selector: 'employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})
export class EmployeeDashboardComponent implements OnInit {

  formvalue!: FormGroup;
  employeemodalObj: EmployeeModal = new EmployeeModal();
  EmployeeList!: any;
  showAdd!:boolean;
  showUpdate!:boolean;

  constructor(private frombuilder: FormBuilder, private api: ApiService) { }

  ngOnInit(): void {
    this.formvalue = this.frombuilder.group({
      firstname: [''],
      lastname: [''],
      email: [''],
      mobile: [''],
      salary: ['']
    })
    this.getEmployeeData();
  }

  postEmployeeDetails() {
    this.employeemodalObj.firstname = this.formvalue.value.firstname;
    this.employeemodalObj.lastname = this.formvalue.value.lastname;
    this.employeemodalObj.email = this.formvalue.value.email;
    this.employeemodalObj.mobile = this.formvalue.value.mobile;
    this.employeemodalObj.salary = this.formvalue.value.salary;

    this.api.postEmployee(this.employeemodalObj).subscribe(res => {
      console.log(res);
      alert("addes sucessfully");
      this.formvalue.reset();

      let ref = document.getElementById("closemodal");
      ref?.click();
      this.getEmployeeData();
    }, err => {
      alert("SOmething went wrong")
    })
  }

  getEmployeeData() {
    this.api.getEmployeedata().subscribe(res => {
      this.EmployeeList = res;
    })
  }

  deleteEmployeeData(emp: any) {
    this.api.deleteEmployee(emp.id).subscribe(res => {
      alert("record deleted");
      this.EmployeeList = this.getEmployeeData();
    })
  }

  OnEdit(emp:any){

    
    this.showAdd= false;
    this.showUpdate=true;

    this.employeemodalObj.id=  emp.id;
    this.formvalue.controls['firstname'].setValue(emp.firstname)
    this.formvalue.controls['lastname'].setValue(emp.lastname)
    this.formvalue.controls['email'].setValue(emp.email)
    this.formvalue.controls['mobile'].setValue(emp.mobile)
    this.formvalue.controls['salary'].setValue(emp.salary)
  }

  updateEmployeeDetails(){
   
    this.employeemodalObj.firstname = this.formvalue.value.firstname;
    this.employeemodalObj.lastname = this.formvalue.value.lastname;
    this.employeemodalObj.email = this.formvalue.value.email;
    this.employeemodalObj.mobile = this.formvalue.value.mobile;
    this.employeemodalObj.salary = this.formvalue.value.salary;

    this.api.updateEmployee(this.employeemodalObj,this.employeemodalObj.id).subscribe(res =>{
      alert("record Udpated");
      let ref = document.getElementById("closemodal");
      ref?.click();
      this.EmployeeList = this.getEmployeeData();
    })
  }

  clickAddEmployee(){
    this.formvalue.reset();
    this.showAdd= true;
    this.showUpdate=false;
  }
  
}
