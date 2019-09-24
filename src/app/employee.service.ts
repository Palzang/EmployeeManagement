import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeService{
employee=[
{id:1 ,name:'ABC',dept:'cse'},
{id:2 ,name:'pqr',dept:'me'},
{id:3 ,name:'def',dept:'ce'}
]
getemployee()
{
    return this.employee
}
setemployee(emp)
{
    this.employee.push(emp)
}

}