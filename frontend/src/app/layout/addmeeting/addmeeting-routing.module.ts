import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddmeetingComponent } from './addmeeting.component';

const routes: Routes = [
    {
        path: '',
        component: AddmeetingComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AddmeetingRoutingModule { }
