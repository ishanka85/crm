import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import {
    MatCardModule, MatFormFieldModule, MatInputModule
} from '@angular/material';

import { AddemailRoutingModule } from './addemail-routing.module';
import { AddemailComponent } from './addemail.component';

@NgModule({
    imports: [
        CommonModule,
        AddemailRoutingModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule,
        FlexLayoutModule.withConfig({ addFlexToParent: false })
    ],
    declarations: [AddemailComponent]
})
export class AddemailModule { }
