import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material';

import { MeetingsRoutingModule } from './meetings-routing.module';
import { MeetingsComponent } from './meetings.component';

@NgModule({
    imports: [
        CommonModule,
        MeetingsRoutingModule,
        MatCardModule,
        FlexLayoutModule.withConfig({ addFlexToParent: false })
    ],
    declarations: [MeetingsComponent]
})
export class MeetingsModule { }
