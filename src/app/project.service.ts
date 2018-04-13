import { Injectable } from '@angular/core';
import { Project } from './project';
import { PROJECTS } from './mock-project';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';

@Injectable()
export class ProjectService {

  constructor(private _messageService: MessageService) { }

  getProjects(): Observable<Project[]> {
    this._messageService.add('ProjectService: fetched projects');
    return of(PROJECTS);
  }

  getProject(id: number): Observable<Project> {
    
    // Todo: send the message _after_ fetching the hero
    this._messageService.add(`ProjectService: fetched project id=${id}`);
    return of(PROJECTS.find(project => project.id === id));
  }

}
