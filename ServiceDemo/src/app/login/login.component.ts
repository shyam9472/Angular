import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { Login } from '../login';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model = new Login();
  empId : number;
  empMgrId : number;
  constructor(private rout : Router) { 
    this.empId=parseInt(localStorage.getItem("empId"));
    this.empMgrId=parseInt(localStorage.getItem("empMgrId"));

  }

  Login(empId,empMgrId)
  {
    if(this.model.passWord == "hexaware") {
      this.rout.navigate(['/Dashboard',empId,empMgrId]);
    }
    
    else{
      alert("INVALID CREDENTIALS");
    }
  }

  cancel() {
    this.rout.navigate(['/']);
  }

  ngOnInit() {
  }

}
