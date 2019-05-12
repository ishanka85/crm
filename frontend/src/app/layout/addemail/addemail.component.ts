import { SharedApiService } from './../../services/shared-api.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-addemail',
  templateUrl: './addemail.component.html',
  styleUrls: ['./addemail.component.scss']
})
export class AddemailComponent implements OnInit {

  constructor(private router: Router, private sharedApi: SharedApiService) { }

  emailForm;
  to;
  cc;
  bcc;
  subject;
  body;

  ngOnInit() {
    this.emailForm = new FormGroup({
      to: new FormControl(''),
      cc: new FormControl(''),
      bcc: new FormControl(''),
      subject: new FormControl(''),
      body: new FormControl('')

    });
  }

  public success: any;
  public error: any;
  onAddemail() {
    this.sharedApi.addEmail(this.to, this.cc, this.bcc, this.subject, this.body).subscribe(res => {
      this.success = res;
      this.router.navigate(['add-email']);
    },
      error => {
        this.error = error._body;
        this.error = error.json().message;
      });
  }

}
