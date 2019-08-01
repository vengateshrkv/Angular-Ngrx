import { Injectable } from '@angular/core'
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import { Employee } from './model/employee'
import { Observable } from 'rxjs/internal/Observable';
import { catchError } from 'rxjs/operators';


@Injectable()
export class EmployeeService {
    constructor(private http: HttpClient) {}

    // private _url: string = "https://my-json-server.typicode.com/vengateshrkv/Employee/products"
    private _url: string = " http://localhost:3000/products "

    getEmployeeList(){
        return this.http.get(this._url);
    }
    addEmployee(employee){
        if(employee.id) {
            const url = `http://localhost:3000/products/${employee.id}`;
            return this.http.put(url, employee);
        } else {
            return this.http.post('http://localhost:3000/products', employee);
        }
    }
    deleteEmployee(productId) {
        const url = `http://localhost:3000/products/${productId}`;
        return this.http.delete(url)
    }
    
}