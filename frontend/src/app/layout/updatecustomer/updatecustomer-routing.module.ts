import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UpdatecustomerComponent } from './updatecustomer.component';

const routes: Routes = [
    {
        path: '',
        component: UpdatecustomerComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UpdatecustomerRoutingModule { }
