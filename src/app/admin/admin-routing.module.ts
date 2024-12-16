import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { EmployeeComponent } from './employee/employee.component';
import { DepartmentComponent } from './department/department.component';
import { ProductComponent } from './product/product.component';
import { HelpComponent } from './help/help.component';
// import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {path:'',component: AdminDashboardComponent},
  {path:'employee',component:EmployeeComponent},
  // {path:'products',component:},
  {path: 'products' , component : ProductComponent},
  {path : 'department',component:DepartmentComponent},
  {path : 'help', component:HelpComponent, outlet:'testOutlet'}
  // {path:'help', component:HelpComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
