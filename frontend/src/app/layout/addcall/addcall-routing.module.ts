import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddcallComponent } from './addcall.component';

const routes: Routes = [
    {
        path: '',
        component: AddcallComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AddcallRoutingModule { }
