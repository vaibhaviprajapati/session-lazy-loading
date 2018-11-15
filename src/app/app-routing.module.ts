/**
 * @author Vaibhavi Prajapati
 * Routing Using Lazy Loading
 *Lazy Loading ia use when application is so large
 *In Lazy Loading Features Modules must not be imported in app module file
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'addEmployee',
    loadChildren: './employee/employee.module#EmployeeModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
