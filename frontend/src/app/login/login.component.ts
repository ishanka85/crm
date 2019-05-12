import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedApiService } from 'src/app/services/shared-api.service';
import { FormGroup,FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    constructor(private router: Router, private sharedApi:SharedApiService ) {}

    email;
    password;
    loginForm;

    ngOnInit() {
        this.loginForm = new FormGroup({
            email:new FormControl('', Validators.compose([
                Validators.required
            ])),
            password: new FormControl('', Validators.compose([
                Validators.required
            ]))
        })
    }

    onLogin() {

        if(this.loginForm.valid) {
            this.sharedApi.login(this.email, this.password).subscribe(res => {
                console.log(res.json().access_token);
                localStorage.setItem('isLoggedin', 'true');
                localStorage.setItem('token', res.json().access_token);
                this.router.navigate(['']);
            });
        }
        
    }
}
