import { Component, OnInit } from '@angular/core';
import { LeaveDetails } from '../leave-details';
import { Observable } from '../../../node_modules/rxjs';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router} from '@angular/router';
import { Employee } from '../employee';

@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.css']
})
export class PendingComponent implements OnInit {
  leavedetails: Observable<LeaveDetails[]>;
  empId :number;
  flagp : number;
  employee : Observable<Employee[]>
  empMgrId : number;
  constructor(private employeeService : EmployeeService,private route:ActivatedRoute) { 
    // this.empId = this.route.snapshot.params["empId"];
    // this.empMgrId = this.route.snapshot.params["empMgrId"];
    // alert(this.empId);
    // alert(this.empMgrId);
    // localStorage.setItem("empId",this.route.snapshot.params["empId"]);
  //  localStorage.setItem("empMgrId",this.route.snapshot.params["empMgrId"]);
  this.employee = employeeService.getEmployee();
  this.empId=parseInt(this.route.snapshot.params["empId"]);
    this.leavedetails = employeeService.showPending(this.empId);
    // this.flagp = parseInt(this.route.snapshot.params["empId"]);
    // alert(this.flagp);
  }

  ngOnInit() {
  }

}