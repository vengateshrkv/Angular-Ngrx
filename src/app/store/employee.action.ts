import { Action } from '@ngrx/store'
import { Employee } from './../model/employee'

export const ADD_EMPLOYEE = 'ADD'
export const DELETE_EMPLOYEE = 'DELETE'
export const UPDATE_EMPLOYEE = 'UPDATE'
export const LOAD_EMPLOYEE = 'Inital Load Employee Data'
export const LOAD_EMPLOYEE_SUCCESS = 'Load Employee Data after get response from server'

export class AddEmployee implements Action {
    readonly type= ADD_EMPLOYEE
    constructor(public payload: Employee){}
}

export class DeleteEmployee implements Action {
    readonly type= DELETE_EMPLOYEE
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

export type Actions = AddEmployee | DeleteEmployee | LoadEmployee | LoadEmployeeSuccess