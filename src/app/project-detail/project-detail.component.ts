import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../project';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ProjectService }  from '../project.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {
  @Input() project: Project;

  constructor(
    private _route: ActivatedRoute,
    private _projectService: ProjectService,
    private _location: Location,
  ) {}

  ngOnInit() {
    this.getProject();
  }

  getProject(): void{
    const id = +this._route.snapshot.paramMap.get('id');
    this._projectService.getProject(id)
      .subscribe(project => this.project = project);
  }

  goBack(): void {
    this._location.back();
  }


}
