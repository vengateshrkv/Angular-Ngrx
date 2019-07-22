import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import { EffectsModule, Actions } from '@ngrx/effects'
import { EmployeeEffect } from './store/employee.effects'

import { StoreModule } from '@ngrx/store'
import { reducer } from './store/employee.reducer';
import { StoreDevtoolsModule } from  '@ngrx/store-devtools'

import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component'
import { EmployeeService } from './app.service'

@NgModule({
  declarations: [
    AppComponent,
    AddEmployeeComponent,
    ViewEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([EmployeeEffect]),
    StoreModule.forRoot({
      employee: reducer
    })
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule {
  
}
