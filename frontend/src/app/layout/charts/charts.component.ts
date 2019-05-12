import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-charts',
    templateUrl: './charts.component.html',
    styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {
    // bar chart
    public barChartOptions: any = {
        scaleShowVerticalLines: false,
        responsive: true
    };
    public barChartLabels: string[] = ['Sales staff1', 'Sales staff 2', 'Sales staff 3', 'Sales staff 4', 'Sales staff 5'];
    public barChartType: string;
    public barChartLegend: boolean;

    public barChartData: any[] = [
        { data: [65, 59, 80, 81, 56, 55, 40], label: 'Calls' },
        { data: [28, 48, 40, 19, 86, 27, 90], label: 'Meetings' },
        { data: [28, 48, 40, 19, 86, 27, 90], label: 'Emails' }
    ];

    constructor() { }

    ngOnInit() {
        this.barChartType = 'bar';
        this.barChartLegend = true;
    }
}
