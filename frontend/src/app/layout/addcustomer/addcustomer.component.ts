import { Router } from '@angular/router';
import { SharedApiService } from './../../services/shared-api.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.component.html',
  styleUrls: ['./addcustomer.component.scss']
})
export class AddcustomerComponent implements OnInit {

  constructor(private router: Router, private sharedApi: SharedApiService) { }

  customerForm;
  name;
  email;
  contact_number;
  address;
  business_registration_number;
  website;

  ngOnInit() {
    this.customerForm = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      contact_number: new FormControl(''),
      address: new FormControl(''),
      business_registration_number: new FormControl(''),
      website: new FormControl('')

    });
  }

  public success: any;
  public error: any;
  onAddcustomer(){
    this.sharedApi.addCustomer(this.name, this.email, this.contact_number, this.address, this.business_registration_number, this.website).subscribe(res => {
      this.success = res;
      this.router.navigate(['add-customer']);
    },
      error => {
        this.error = error._body;
        this.error = error.json().message;
      });
  }

}
