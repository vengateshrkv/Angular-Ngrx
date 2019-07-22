import { Injectable } from '@angular/core'
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import { Employee } from './model/employee'
import { Observable } from 'rxjs/internal/Observable';
import { catchError } from 'rxjs/operators';


@Injectable()
export class EmployeeService {
    constructor(private http: HttpClient) {}

    private _url: string = "https://my-json-server.typicode.com/vengateshrkv/Employee/products"

    getEmployeeList(){
        return this.http.get(this._url);
    }

    
}