import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LeaveDetails } from '../leave-details';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pending-new',
  templateUrl: './pending-new.component.html',
  styleUrls: ['./pending-new.component.css']
})
export class PendingNewComponent implements OnInit {
  leavedetails: Observable<LeaveDetails[]>;
  empId :number;
  leaId : number;
  showButton : boolean = false;
  flagp : number;
  employee : Observable<Employee[]>
  empMgrId : number;
  constructor(private employeeService : EmployeeService,
              private router : Router, private route:ActivatedRoute) {
    this.employee = employeeService.getEmployee();
    this.empId=parseInt(this.route.snapshot.params["empId"]);
    localStorage.setItem("empMgrId",this.route. snapshot.params["empId"]);
    // alert(this.empMgrId);
    this.leavedetails = employeeService.showPending(this.empId);
    this.flagp = parseInt(this.route.snapshot.params["empId"]);
    // alert(this.flagp);
  }

  clickRow(x,e) {
    this.leaId=x.leaId; 
    //alert(this.leavId);
    localStorage.setItem("leaId",x.leaId); 
    //alert(e.empId);
    localStorage.setItem("empId",e.empId);
    this.showButton=true;
   //alert(localStorage.getItem("leaveId"));
  }
  cancel(){
    this.router.navigate(["/DashBoard"]);
  }
  doApproveDeny() { 
    this.router.navigate(["/approve"]);
  }
  ngOnInit() {
  }

}
