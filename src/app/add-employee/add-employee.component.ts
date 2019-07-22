import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store'
import { Employee } from './../model/employee'
import * as EmployeeActions from './../store/employee.action'

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  public person:any = {};
  constructor(private store: Store<Employee>) {
   }

  ngOnInit() {
  }

  addEmployee() {
   this.store.dispatch(new EmployeeActions.AddEmployee(this.person))
   this.person = {}
  }
  updateEmployee(employee) {
    this.person = Object.assign({}, employee)
  }
}
