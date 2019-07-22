import { Injectable } from '@angular/core'
import { Actions, Effect, ofType } from '@ngrx/effects'
import { Action } from '@ngrx/store'
import { Observable, of } from 'rxjs'
import { map, mergeMap, catchError } from 'rxjs/operators'

import { Employee } from './../model/employee'
import * as EmployeeActions from './employee.action'
import { EmployeeService } from '../app.service'

@Injectable()

export class EmployeeEffect {
  constructor(
    private action: Actions, 
    private employeeService: EmployeeService) 
    {}
  @Effect()
  loadEmployee= this.action.pipe(
    ofType<EmployeeActions.LoadEmployee>(
      EmployeeActions.LOAD_EMPLOYEE
    ),
    mergeMap((action: EmployeeActions.LoadEmployee) =>
      this.employeeService.getEmployeeList().pipe(
        map(
          (employee) => 
            new EmployeeActions.LoadEmployeeSuccess(employee)
        )
      )
    )
  )
}