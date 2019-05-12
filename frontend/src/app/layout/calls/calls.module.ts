import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material';

import { CallsRoutingModule } from './calls-routing.module';
import { CallsComponent } from './calls.component';

@NgModule({
    imports: [
        CommonModule,
        CallsRoutingModule,
        MatCardModule,
        FlexLayoutModule.withConfig({ addFlexToParent: false })
    ],
    declarations: [CallsComponent]
})
export class CallsModule { }
