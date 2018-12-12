import { Component, OnInit } from '@angular/core';
import { LeaveDetails } from '../leave-details';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-approve-deny',
  templateUrl: './approve-deny.component.html',
  styleUrls: ['./approve-deny.component.css']
})
export class ApproveDenyComponent implements OnInit {
  
  employee : Observable<Employee>;
  leavedetails : Observable<LeaveDetails[]>;
  empId : number;
  leaId:number;
  empMgrId : number;
  msg : String;
  constructor(public employeesService:EmployeeService, public router : Router) {
    this.empId=parseInt(localStorage.getItem("empId"));
    this.empMgrId=parseInt(localStorage.getItem("empMgrId"));
    // alert(this.empMgrId);
    this.employee=employeesService.showEmploy(this.empId);

    this.leaId=parseInt(localStorage.getItem("leaId"));
    this.leavedetails=employeesService.getLeave(this.leaId);
   }
  ld = new LeaveDetails(); 
  // ed = new Employee(); 
  approve() {
    this.ld.leaId=parseInt(localStorage.getItem("leaId")); 
    this.ld.leaSta="APPROVED"; 
    
    
   // alert(this.ld.leaveManagerComm + " " +this.ld.leaveId + " " +this.mgrId); 
    this.employeesService.approveDeny(this.ld,this.empMgrId).subscribe(
        success => {
            this.msg=success;
        },
        err => { 
            this.msg=err;
            console.log(err);
        }
    )
  }
  reject() {
    this.ld.leaId=parseInt(localStorage.getItem("leaId")); 
    this.ld.leaSta="DENIED"; 
    this.empMgrId=parseInt(localStorage.getItem("empMgrId"));
   // alert(this.ld.leaveManagerComm + " " +this.ld.leaveId + " " +this.mgrId); 
    this.employeesService.approveDeny(this.ld,this.empMgrId).subscribe(
        success => {
            this.msg=success;
        },
        err => { 
            this.msg=err;
            console.log(err);
        }
    )
  }
  cancel(){
    this.router.navigate(['/']);
  }
  ngOnInit() {
  }

}