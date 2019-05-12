import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SharedApiService {
  

  baseUrl = "http://127.0.0.1:8000/api/";

  constructor(private http: Http) { }

  login(username, password) {
    const data = {
      email: username,
      password: password
    }
    return this.http.post(this.baseUrl + "auth/login", data);
  }

  addUser(email, password, name, role_id){
    const data = {
      email: email,
      password: password,
      name: name,
      role_id: role_id
    }
    let headers = new Headers();
    headers.set('Authorization', "Bearer " + localStorage.getItem("token"));
    return this.http.post(this.baseUrl + "user/add", data, { headers: headers });
  }

  getUsers() {
    let headers = new Headers();
    headers.set('Authorization', "Bearer " + localStorage.getItem("token"));
    return this.http.get(this.baseUrl + "users", { headers: headers });
  }

  getCustomers() {
    let headers = new Headers();
    headers.set('Authorization', "Bearer " + localStorage.getItem("token"));
    return this.http.get(this.baseUrl + "customer");
  }

  addCustomer(name, email, contact_number, address, business_registration_number, website) {
    const data = {
      email: email,
      contact_number: contact_number,
      name: name,
      address: address,
      business_registration_number: business_registration_number,
      website: website
    }
    let headers = new Headers();
    headers.set('Authorization', "Bearer " + localStorage.getItem("token"));
    return this.http.post(this.baseUrl + "customer", data, { headers: headers });
  }

  addEmail(to, cc, bcc, subject, body) {
    const data = {
      to: to,
      cc: cc,
      bcc: bcc,
      subject: subject,
      body: body
    }
    let headers = new Headers();
    headers.set('Authorization', "Bearer " + localStorage.getItem("token"));
    return this.http.post(this.baseUrl + "email", data, { headers: headers });
  }

  delete(id) {
    let headers = new Headers();
    headers.set('Authorization', "Bearer " + localStorage.getItem("token"));
    return this.http.post(`${this.baseUrl}customer/${id}/delete`,headers);
  }
}
