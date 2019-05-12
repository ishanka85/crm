import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule, MatTableModule } from '@angular/material';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';

@NgModule({
    imports: [
        CommonModule,
        CustomersRoutingModule,
        MatPaginatorModule,
        MatTableModule
    ],
    declarations: [CustomersComponent]
})
export class CustomersModule { }
