import { Action } from '@ngrx/store'
import { Employee } from './../model/employee'
import { Update } from '@ngrx/entity'

export const ADD_EMPLOYEE = 'ADD'
export const ADD_EMPLOYEE_SUCCESS = 'ADD EMPLOYEE AFTER SUCCESS'
export const DELETE_EMPLOYEE = 'DELETE'
export const DELETE_EMPLOYEE_SUCCESS = 'DELETE employee success'
export const UPDATE_EMPLOYEE = 'UPDATE'
export const UPDATE_EMPLOYEE_SUCCESS = 'UPDATE Employee'
export const LOAD_EMPLOYEE = 'Inital Load Employee Data'
export const LOAD_EMPLOYEE_SUCCESS = 'Load Employee Data after get response from server'

export class AddEmployee implements Action {
    readonly type= ADD_EMPLOYEE
    constructor(public payload: Employee){}
}

export class AddEmployeeSuccess implements Action {
    readonly type= ADD_EMPLOYEE_SUCCESS
    constructor(public payload: Employee){}
}

export class UpdateEmployee implements Action {
    readonly type= UPDATE_EMPLOYEE
    constructor(public payload: Employee){}
}

export class UpdateEmployeeSuccess implements Action {
    readonly type= UPDATE_EMPLOYEE_SUCCESS
    constructor(public payload: Update<Employee>){}
}

export class DeleteEmployee implements Action {
    readonly type= DELETE_EMPLOYEE
    constructor(public payload: number){}
}

export class DeleteEmployeeSuccess implements Action {
    readonly type= DELETE_EMPLOYEE_SUCCESS
    constructor(public payload: number){}
}

export class LoadEmployee implements Action {
    readonly type= LOAD_EMPLOYEE
    constructor(){}
}

export class LoadEmployeeSuccess implements Action {
    readonly type= LOAD_EMPLOYEE_SUCCESS
    constructor(public payload: Employee){}
}

export type Actions = AddEmployee | DeleteEmployee | LoadEmployee | LoadEmployeeSuccess | AddEmployeeSuccess | UpdateEmployeeSuccess