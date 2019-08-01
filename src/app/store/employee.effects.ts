import { Injectable } from '@angular/core'
import { Actions, Effect, ofType } from '@ngrx/effects'
import { Action } from '@ngrx/store'
import { Observable, of } from 'rxjs'
import { map, mergeMap, catchError } from 'rxjs/operators'

import { Employee } from './../model/employee'
import * as EmployeeActions from './employee.action'
import { EmployeeService } from '../app.service'
import { UpdateEmployee } from './employee.action';

@Injectable()

export class EmployeeEffect {
  constructor(
    private action: Actions, 
    private employeeService: EmployeeService
  ){ }

  @Effect()
  loadEmployee = this.action.pipe(
    ofType<EmployeeActions.LoadEmployee>(
      EmployeeActions.LOAD_EMPLOYEE
    ),
    mergeMap((action: EmployeeActions.LoadEmployee) =>
      this.employeeService.getEmployeeList().pipe(
        map(
          (employee: Employee) =>         
            new EmployeeActions.LoadEmployeeSuccess(employee)
        )
      )
    )
  )

  @Effect()
  createEmployee = this.action.pipe(
    ofType<EmployeeActions.AddEmployee>(
      EmployeeActions.ADD_EMPLOYEE
    ),
    map((action : EmployeeActions.AddEmployee) => action.payload),
    mergeMap((employee: Employee) =>
      this.employeeService.addEmployee(employee).pipe(
        map(
          (newEmployee: Employee) => {
            console.log(newEmployee)
            new EmployeeActions.AddEmployeeSuccess(newEmployee) 
          }
        )
      )
    )
  )

  @Effect()
  updateEmployee = this.action.pipe(
    ofType<EmployeeActions.UpdateEmployee>(
      EmployeeActions.UPDATE_EMPLOYEE
    ),
    map((action : EmployeeActions.UpdateEmployee) => action.payload),
    mergeMap((employee: Employee) =>
      this.employeeService.addEmployee(employee).pipe(
        map(
          (updateEmployee: Employee) =>         
            new EmployeeActions.UpdateEmployeeSuccess({
              id: updateEmployee.id,
              changes: updateEmployee
            })
        )
      )
    )
  )

  @Effect()
  deleteEmployee = this.action.pipe(
    ofType<EmployeeActions.DeleteEmployee>(
      EmployeeActions.DELETE_EMPLOYEE
    ),
    map((action : EmployeeActions.DeleteEmployee) => action.payload),
    mergeMap((id: number) =>
      this.employeeService.deleteEmployee(id).pipe(
        map(() => new EmployeeActions.DeleteEmployeeSuccess(id)
        )
      )
    )
  )

}