import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormGroup } from '@angular/forms';
import {
    MatCardModule, MatFormFieldModule, MatInputModule
} from '@angular/material';

import { AdduserRoutingModule } from './adduser-routing.module';
import { AdduserComponent } from './adduser.component';
FormGroup

@NgModule({
    imports: [
        CommonModule,
        AdduserRoutingModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule,
        MatFormFieldModule,
        FlexLayoutModule.withConfig({ addFlexToParent: false })
    ],
    declarations: [AdduserComponent]
})
export class AdduserModule { }
