import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddemailComponent } from './addemail.component';

const routes: Routes = [
    {
        path: '',
        component: AddemailComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AddemailRoutingModule { }
