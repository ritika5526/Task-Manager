import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

 Designation:string;
 Username:string;
 No_OfTeam_Members:number;
 Total_cost:number;
 Pending_Tasks:number;
 Upcoming_Proj:number;
 Proj_cost:number;
 Current_expenditure:number;
 Available_funds:number;

 Clients:string[];
 Projects:string[];
 Year:number[];
 Team_Mem_Summ=[];
 Team_mem = [];

 constructor(private dashboardService:DashboardService){

 }

  ngOnInit(){
    this.Designation = "Team Leader";
    this.Username = "Ritika Gupta";
    this.No_OfTeam_Members = 100;
    this.Total_cost = 568974;
    this.Pending_Tasks = .25;
    this.Upcoming_Proj = 1236;
    this.Proj_cost = 23125;
    this.Current_expenditure = 125000;
    this.Available_funds = 78000;

    this.Clients = this.dashboardService.getClients();
    this.Projects = this.dashboardService.getProject();
    this.Year = this.dashboardService.getYear();
    this.Team_Mem_Summ = this.dashboardService.getTeamMemberSummary();


    this.Team_mem = [
      {Region : "East",Members:[
        {ID:1, Name:"Ford", Status:"Available"},
        {ID:2, Name:"John", Status:"Busy"},
        {ID:3, Name:"Mike", Status:"Available"},
        {ID:4, Name:"Cley", Status:"Busy"}
      ]
    },
      {Region : "West",Members:[
        {ID:1, Name:"Ford", Status:"Available"},
        {ID:2, Name:"John", Status:"Busy"},
        {ID:3, Name:"Mike", Status:"Available"},
        {ID:4, Name:"Cley", Status:"Busy"}
      ]
    },
      {Region : "North",Members:[
        {ID:1, Name:"Ford", Status:"Available"},
        {ID:2, Name:"John", Status:"Busy"},
        {ID:3, Name:"Mike", Status:"Available"},
        {ID:4, Name:"Cley", Status:"Busy"}
      ]
    },
      {Region : "South",Members:[
        {ID:1, Name:"Ford", Status:"Available"},
        {ID:2, Name:"John", Status:"Busy"},
        {ID:3, Name:"Mike", Status:"Available"},
        {ID:4, Name:"Cley", Status:"Busy"}
      ]
    }
    ];
  }

  onProjectChange($event){
    if($event.target.innerHTML == "Project A"){
    this.Username = "Ritika Gupta";
    this.No_OfTeam_Members = 100;
    this.Total_cost = 568974;
    this.Pending_Tasks = .25;
    this.Upcoming_Proj = 1236;
    this.Proj_cost = 23125;
    this.Current_expenditure = 125000;
    this.Available_funds = 78000;
    }
    else if($event.target.innerHTML == "Project B"){
    this.Username = "XYZ";
    this.No_OfTeam_Members = 50;
    this.Total_cost = 45274;
    this.Pending_Tasks = .1;
    this.Upcoming_Proj = 16;
    this.Proj_cost = 925;
    this.Current_expenditure = 825000;
    this.Available_funds = 18000;
    }
    else if($event.target.innerHTML == "Project C"){
    this.Username = "ABC";
    this.No_OfTeam_Members = 20;
    this.Total_cost = 98564;
    this.Pending_Tasks = .3;
    this.Upcoming_Proj = 20;
    this.Proj_cost = 1025;
    this.Current_expenditure = 925000;
    this.Available_funds = 17000;
    }
    else if($event.target.innerHTML == "Project D"){
      this.Username = "PQR";
      this.No_OfTeam_Members = 35;
      this.Total_cost = 77564;
      this.Pending_Tasks = 0.4;
      this.Upcoming_Proj = 12;
      this.Proj_cost = 63514;
      this.Current_expenditure = 236900;
      this.Available_funds = 12300;
    }
  }
}
