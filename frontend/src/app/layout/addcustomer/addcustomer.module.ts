import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import {
    MatCardModule, MatFormFieldModule, MatInputModule
} from '@angular/material';

import { AddcustomerRoutingModule } from './addcustomer-routing.module';
import { AddcustomerComponent } from './addcustomer.component';

@NgModule({
    imports: [
        CommonModule,
        AddcustomerRoutingModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule,
        FlexLayoutModule.withConfig({ addFlexToParent: false })
    ],
    declarations: [AddcustomerComponent]
})
export class AddcustomerModule { }
