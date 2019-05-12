import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                loadChildren: './charts/charts.module#ChartsModule'
            },
            {
                path: 'users',
                loadChildren: './users/users.module#UsersModule'
            },
            {
                path: 'customers',
                loadChildren: './customers/customers.module#CustomersModule'
            },
            {
                path: 'emails',
                loadChildren: './emails/emails.module#EmailsModule'
            },
            {
                path: 'meetings',
                loadChildren: './meetings/meetings.module#MeetingsModule'
            },
            {
                path: 'calls',
                loadChildren: './calls/calls.module#CallsModule'
            },
            {
                path: 'add-user',
                loadChildren: './adduser/adduser.module#AdduserModule'
            },
            {
                path: 'add-customer',
                loadChildren: './addcustomer/addcustomer.module#AddcustomerModule'
            },
            {
                path: 'edit-customer',
                loadChildren: './updatecustomer/updatecustomer.module#UpdatecustomerModule'
            },
            {
                path: 'add-email',
                loadChildren: './addemail/addemail.module#AddemailModule'
            },
            {
                path: 'add-meeting',
                loadChildren: './addmeeting/addmeeting.module#AddmeetingModule'
            },
            {
                path: 'add-call',
                loadChildren: './addcall/addcall.module#AddcallModule'
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
