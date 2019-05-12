import { Router } from '@angular/router';
import { SharedApiService } from 'src/app/services/shared-api.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss']
})
export class AdduserComponent implements OnInit {

  constructor(private router: Router, private sharedApi: SharedApiService) { }

  userForm;
  name;
  email;
  password;
  role_id;

  ngOnInit() {
    this.userForm = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      role_id: new FormControl('')

    });
  }

  public error: any; 
  public success: any; 

  onAdduser(){
    this.sharedApi.addUser(this.email, this.password, this.name, this.role_id).subscribe(res => {
      this.success = res;
      this.router.navigate(['add-user']);
    },
      error => { 
        this.error = error._body;
        console.log(error.json().message);
        this.error = error.json().message;
      });
  }

}
