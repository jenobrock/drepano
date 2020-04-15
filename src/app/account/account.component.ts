import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthServiceService } from '../auth-service.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
      HTTP_OPTIONS = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Access-Control-Allow-Credentials' : 'true',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, DELETE, PUT, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
    })
  };
  constructor(private authservice: AuthServiceService, private http:HttpClient) { }

  ngOnInit(): void {
  }
  onSubmit(form:NgForm){

    let url= "https://us-central1-drepano-test.cloudfunctions.net/create_use_actif/user.json";
this.http.post(url,{ email:form.value.mail,
      password:form.value.password,
      username:form.value.username},this.HTTP_OPTIONS )
      .subscribe(res=>{
        console.log("reusii ",res);
      }, err=>console.log(err))

    console.log(form.value.email, form.value.password,form.value.username);

    // this.authservice.createUser(form.value.email, form.value.password,form.value.username);
  }

}
