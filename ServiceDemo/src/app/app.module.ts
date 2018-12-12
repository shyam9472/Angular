import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { UserService } from './user.service';
import { UserComponent } from './user/user.component';
import { EmployeeComponent } from './employee/employee.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { EmpShowComponent } from './emp-show/emp-show.component';
import { EmployeeService } from './employee.service';
import { EmpMgrShowComponent } from './emp-mgr-show/emp-mgr-show.component';
import { ApplyLeaveComponent } from './apply-leave/apply-leave.component';
import { FormsModule } from '@angular/forms';
import { PendingComponent } from './pending/pending.component';
import { PendingNewComponent } from './pending-new/pending-new.component';
import { HistoryComponent } from './history/history.component';
import { ApproveDenyComponent } from './approve-deny/approve-deny.component';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
  { path: '', component: EmployeeComponent },
  { path: 'Dashboard/:empId/:empMgrId', component: DashboardComponent },
  { path: 'Login', component:  LoginComponent },
  { path: 'approve', component:  ApproveDenyComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    EmployeeComponent,
    DashboardComponent,
    EmpShowComponent,
    EmpMgrShowComponent,
    ApplyLeaveComponent,
    PendingComponent,
    PendingNewComponent,
    HistoryComponent,
    ApproveDenyComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule, 
    HttpModule, FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
