import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  aim="welcome to  SBL"

  acNumber=`Account Number Please`

  acno=""

  pswd=""

  users:any = {
    1000: { acno: 1000, username: "Aahil", password: "userone", balance: 5000},
    1001: { acno: 1001, username: "Abhinav", password: "usertwo", balance: 6000},
    1002: { acno: 1002, username: "Laisha", password: "userthree", balance: 7000},
    1003: { acno: 1003, username: "Riddhieka", password: "userfour", balance: 8000}
  }

  constructor() { }

  ngOnInit(): void {
  }
  accNumber(event:any){
    console.log(event.target.value)
    this.acno=event.target.value
  }
    pswdChange(event:any){
      console.log(event.target.value)
      this.pswd=event.target.value
    
  }

  login(){
 var acno = this.acno;
  var pswd = this.pswd;
  
  let accDetails = this.users

  if(acno in accDetails){
    if(pswd == accDetails[acno]["password"]){

      alert("login successfully")

    }
    else{
      alert("invalid password")
    }
  }
    else{
      alert("invalid Account Nuber")
    }
  }
}