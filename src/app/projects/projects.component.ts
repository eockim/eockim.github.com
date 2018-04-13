import { Component, OnInit } from '@angular/core';
import { Project } from '../project';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  
  projects : Project[];

  constructor(private _projectService: ProjectService) {
    console.log('constructor');
   }

  ngOnInit() {
    console.log(`ngOnInit ${this._projectService}`);
    this.getProjects();
  }

  getProjects(): void {
    //this.projects = this._projectService.getProjects();
    this._projectService.getProjects().subscribe(projects => this.projects = projects);
  }

}
