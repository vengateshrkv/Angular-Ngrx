import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable'
import { Store } from '@ngrx/store'
import { Employee } from './../model/employee'
import { AppState } from './../app.state'
import * as EmployeeActions from './../store/employee.action'

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {

  @Output() public updateEmp = new EventEmitter<String>();

  public employeeList= [];
  public person:any = {};

  constructor(private store: Store<AppState> ){
   
   }

  ngOnInit() {
    // this.store.dispatch({type: 'LOAD_EMPLOYEE'})
    this.store.dispatch(new EmployeeActions.LoadEmployee())
    this.store.subscribe(state => this.employeeList = state.employee)
  }
  delEmployee(index) {
    this.store.dispatch(new EmployeeActions.DeleteEmployee(index))
  }
  updateEmployee(employee) {
    // this.store.dispatch(new EmployeeActions.UpdateEmployee(employee))
    this.updateEmp.emit(employee)
  }

}
