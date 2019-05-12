import { SharedApiService } from 'src/app/services/shared-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  data;

  constructor(private sharedApi: SharedApiService) { }

  ngOnInit() {
    this.sharedApi.getUsers().subscribe(res => {
      this.data = res.json();
      console.log(this.data);
    })
  }

}
