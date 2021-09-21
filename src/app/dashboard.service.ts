import { Injectable } from '@angular/core';

@Injectable()
export class DashboardService {
  getTeamMemberSummary():any[]
  {
    var TeamMemberSummary = [
      { Region:"East", Team_Members_Count:50, Temporary_unavailable_members:6},
      { Region:"West", Team_Members_Count:20, Temporary_unavailable_members:5},
      {Region:"North", Team_Members_Count:40, Temporary_unavailable_members:1},
      {Region:"South", Team_Members_Count:10, Temporary_unavailable_members:0}
    ];
    return TeamMemberSummary;
  }

  getClients():any[]
  {
    var Clients = [
      "ABC Infotech Ltd.",
      "DEF Solutions Ltd.",
      "GHI Group of Industries",
      "XYZ Corporate"
    ];
    return Clients;
  }

  getProject():any[]
  {
    var Project = [
      "Project A",
      "Project B",
      "Project C",
      "Project D"
    ];
    return Project;
  }

  getYear():any[]
  {
    var Year = [
      2018,
      2019,
      2020,
      2021
    ];
    return Year;
  }


}
