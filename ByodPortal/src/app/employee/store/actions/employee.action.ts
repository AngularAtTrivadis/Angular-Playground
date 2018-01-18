import { Action } from '@ngrx/store';
import { Employee } from '../../models/employee.model';


export enum ActionTypes {
    LoadEmployees = '[Employees] Load Employee',
    LoadEmployeeSuccess = '[Employees] Load Employee Sucess',
    LoadEmployeeFail = '[Employees] Load Employee Fail',
    CreateEmployee = '[Employees] Create Employee',
    CreateEmployeeSuccess = '[Employees] Create Employee Sucess',
    CreateEmployeeFail = '[Employees] Create Employee Fail',
    UpdateEmployee = '[Employees] Update Employee',
    UpdateEmployeeSuccess = '[Employees] Update Employee Sucess',
    UpdateEmployeeFail = '[Employees] Update Employee Fail',
    RemoveEmployee = '[Employees] Remove Employee',
    RemoveEmployeeSuccess = '[Employees] Remove Employee Sucess',
    RemoveEmployeeFail = '[Employees] Remove Employee Fail'
}

export class LoadEmployees implements Action {
  readonly type = ActionTypes.LoadEmployees;
}

export class LoadEmployeeSuccess implements Action {
  readonly type = ActionTypes.LoadEmployeeSuccess;
  constructor(public payload: Employee[]) {}
}

export class LoadEmployeeFail implements Action {
  readonly type = ActionTypes.LoadEmployeeFail;
  constructor(public payload: any) {}
}

// create actions
export class CreateEmployee implements Action {
  readonly type = ActionTypes.CreateEmployee;
  constructor(public payload: Employee) {}
}
export class CreateEmployeeSuccess implements Action {
  readonly type = ActionTypes.CreateEmployeeSuccess;
  constructor(public payload: Employee) {}
}
export class CreateEmployeeFail implements Action {
  readonly type = ActionTypes.CreateEmployeeFail;
  constructor(public payload: any) {}
}

// update actions
export class UpdateEmployee implements Action {
  readonly type = ActionTypes.UpdateEmployee;
  constructor(public payload: Employee) {}
}
export class UpdateEmployeeSuccess implements Action {
  readonly type = ActionTypes.UpdateEmployeeSuccess;
  constructor(public payload: Employee) {}
}
export class UpdateEmployeeFail implements Action {
  readonly type = ActionTypes.UpdateEmployeeFail;
  constructor(public payload: any) {}
}

// remove actions
export class RemoveEmployee implements Action {
  readonly type = ActionTypes.RemoveEmployee;
  constructor(public payload: Employee) {}
}
export class RemoveEmployeeSuccess implements Action {
  readonly type = ActionTypes.RemoveEmployeeSuccess;
  constructor(public payload: Employee) {}
}
export class RemoveEmployeeFail implements Action {
  readonly type = ActionTypes.RemoveEmployeeFail;
  constructor(public payload: any) {}
}

// action types
export type EmployeeActions =
  | LoadEmployees
  | LoadEmployeeSuccess
  | LoadEmployeeFail
  | CreateEmployee
  | CreateEmployeeSuccess
  | CreateEmployeeFail
  | UpdateEmployee
  | UpdateEmployeeSuccess
  | UpdateEmployeeFail
  | RemoveEmployee
  | RemoveEmployeeSuccess
  | RemoveEmployeeFail
  ;
