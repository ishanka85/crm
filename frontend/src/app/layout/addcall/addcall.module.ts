import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule as FormModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatAutocompleteModule, MatCardModule, MatFormFieldModule, MatInputModule
} from '@angular/material';

import { AddcallRoutingModule } from './addcall-routing.module';
import { AddcallComponent } from './addcall.component';

@NgModule({
  declarations: [AddcallComponent],
  imports: [
    CommonModule,
    AddcallRoutingModule,
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
export class AddcallModule { }
