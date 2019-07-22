import { Action } from '@ngrx/store'
import { Employee } from './../model/employee'
import * as EmployeeActions from './employee.action'

const initialState: any =  [
    {
        id : 102,
        name: "Tamil",
        department: "EEE",
        age: 25
    }
]


export function reducer(state = initialState, action: EmployeeActions.Actions) {
    switch(action.type) {
        case EmployeeActions.ADD_EMPLOYEE:
            if(action.payload.id) {
               let getValue =  state.findIndex(data => data.id === action.payload.id)
               state[getValue] = action.payload;
               return state
            } else {
               let getIndex = (state[state.length - 1].id) + 1
               action.payload.id = getIndex;
               return [ ...state, action.payload]
            }
        case EmployeeActions.DELETE_EMPLOYEE:
            state.splice(action.payload, 1)
            return state
        case EmployeeActions.LOAD_EMPLOYEE:
            return state
        case EmployeeActions.LOAD_EMPLOYEE_SUCCESS:
            return [ ...state, (action.payload)[0]]
        default:
            return state;
    }
}