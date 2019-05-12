import { Component, OnInit } from '@angular/core';
import { SharedApiService } from 'src/app/services/shared-api.service';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})

export class CustomersComponent implements OnInit {

  data;
  dataSource:MatTableDataSource<any>;
  displayedColumns: string[] = ["id", "name", "email", "contact_number", "address", "edit", "delete"];

  customers = [];

  constructor(private sharedAPI: SharedApiService) { }
  ngOnInit() {
    this.getCustomers();
  }

  getCustomers() {
    this.sharedAPI.getCustomers().subscribe(res => {
      this.data = res.json();
      console.log(this.data);
      this.dataSource = new MatTableDataSource(this.data);

    });
  }

  delete(id) {
    this.sharedAPI.delete(id).subscribe(res => {
      this.getCustomers();
    })
  }
}
