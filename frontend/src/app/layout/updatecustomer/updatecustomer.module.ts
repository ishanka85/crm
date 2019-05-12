import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule as FormModule, ReactiveFormsModule } from '@angular/forms';
import {
    MatCardModule, MatFormFieldModule, MatInputModule
} from '@angular/material';

import { UpdatecustomerRoutingModule } from './updatecustomer-routing.module';
import { UpdatecustomerComponent } from './updatecustomer.component';

@NgModule({
    imports: [
        CommonModule,
        UpdatecustomerRoutingModule,
        FormModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule,
        MatFormFieldModule,
        FlexLayoutModule.withConfig({ addFlexToParent: false })
    ],
    declarations: [UpdatecustomerComponent]
})
export class UpdatecustomerModule { }
