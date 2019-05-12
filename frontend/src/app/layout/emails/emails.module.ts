import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material';
import {  MatPaginatorModule } from '@angular/material';

import { EmailsRoutingModule } from './emails-routing.module';
import { EmailsComponent } from './emails.component';

@NgModule({
    imports: [
        CommonModule,
        EmailsRoutingModule,
        MatTableModule,
        MatPaginatorModule
    ],
    declarations: [EmailsComponent]
})
export class EmailsModule { }
