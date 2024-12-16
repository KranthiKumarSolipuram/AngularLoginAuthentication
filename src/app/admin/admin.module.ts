import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { EmployeeComponent } from './employee/employee.component';
import { DepartmentComponent } from './department/department.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { ProductComponent } from './product/product.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { HelpComponent } from './help/help.component';


@NgModule({
  declarations: [
    EmployeeComponent,
    DepartmentComponent,
    AdminDashboardComponent,
    ProductComponent,
    HelpComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    MatProgressBarModule,
    
  ]
})
export class AdminModule { }
