import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable'
import { Store, select } from '@ngrx/store'
import { Employee } from './../model/employee'
import { AppState } from './../app.state'
import * as EmployeeActions from './../store/employee.action'
import * as fromEmployees from './../store/employee.reducer'

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {

  @Output() public updateEmp = new EventEmitter<String>();

  employeeList: Observable<Employee>
  public person:any = {};
  // public employeeList

  constructor(private store: Store<AppState> ){
   
   }

  ngOnInit() {
    this.store.dispatch(new EmployeeActions.LoadEmployee())
    this.employeeList = this.store.pipe(select(fromEmployees.getEmployees))
    // this.store.subscribe(state => this.employeeList = state.employee)
    localStorage.setItem('whatever', 'something');
  }
  delEmployee(index) {
    this.store.dispatch(new EmployeeActions.DeleteEmployee(index))
    console.log(localStorage.getItem('whatever'))
  }
  updateEmployee(employee) {
    this.updateEmp.emit(employee)
  }

}
