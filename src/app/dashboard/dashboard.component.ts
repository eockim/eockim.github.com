import { Component, OnInit } from '@angular/core';
import { Project } from '../project';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  projects: Project[] = [];

  constructor(private _projectService: ProjectService) { }

  ngOnInit() {
    this.getProjcets();
  }

  getProjcets(): void {
    this._projectService.getProjects()
      .subscribe(projects => this.projects = projects.slice(1, 5));
  }
}