import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule as FormModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatAutocompleteModule, MatCardModule, MatFormFieldModule, MatInputModule
} from '@angular/material';

import { AddmeetingRoutingModule } from './addmeeting-routing.module';
import { AddmeetingComponent } from './addmeeting.component';

@NgModule({
  declarations: [AddmeetingComponent],
  imports: [
    CommonModule,
    AddmeetingRoutingModule,
    MatAutocompleteModule,
    FormModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatFormFieldModule,
    FlexLayoutModule.withConfig({ addFlexToParent: false })
  ]
})
export class AddmeetingModule { }
