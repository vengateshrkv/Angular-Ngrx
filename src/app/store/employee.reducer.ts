import { Action, createFeatureSelector, createSelector } from '@ngrx/store'
import { Employee } from './../model/employee'
import * as EmployeeActions from './employee.action'

import  { EntityState, EntityAdapter, createEntityAdapter} from '@ngrx/entity'

export interface EmployeeState extends EntityState<Employee> {
    employee: Employee
}

export const defaultEmployee: EmployeeState = {
   ids: [],
   entities: {}
}

export const employeeAdaptor: EntityAdapter<Employee> = createEntityAdapter<Employee>();


export const initialState = employeeAdaptor.getInitialState(defaultEmployee)

// export const initialState: EmployeeState = [{
//     id: 1,
//     name: 'vengatesh',
//     age: 24,
//     department: 'a'
// }]

// export const initialState: EmployeeState = []


export function reducer(state = initialState, action: EmployeeActions.Actions) {
    switch(action.type) {
        case EmployeeActions.ADD_EMPLOYEE:
            if(action.payload.id) {
               let getValue =  state.ids.findIndex(data => data.id === action.payload.id)
               state[getValue] = action.payload;
               return state
            } else {
            //    let getIndex = (state.ids[state.ids.length - 1]) + 1
            //    action.payload.id = getIndex;
                return employeeAdaptor.addOne(action.payload, state)
            }
        case EmployeeActions.ADD_EMPLOYEE_SUCCESS:
            return employeeAdaptor.addOne(action.payload, state)

        // case EmployeeActions.DELETE_EMPLOYEE:
        //     state.splice(action.payload, 1)
        //     return state
        
        case EmployeeActions.DELETE_EMPLOYEE_SUCCESS:
            return employeeAdaptor.removeOne(action.payload, state)
        case EmployeeActions.LOAD_EMPLOYEE:
            return state

        case EmployeeActions.LOAD_EMPLOYEE_SUCCESS:
            return employeeAdaptor.addAll(action.payload,{
                ...state
            })

        case EmployeeActions.UPDATE_EMPLOYEE_SUCCESS:
            return employeeAdaptor.updateOne(action.payload, state)
        default:
            return state;
    }
}

const getEmployeeFeatureState =  createFeatureSelector<EmployeeState>('employee')

export const getEmployees = createSelector(
    getEmployeeFeatureState,
    // (state: Employee) => state   
    employeeAdaptor.getSelectors().selectAll 
)