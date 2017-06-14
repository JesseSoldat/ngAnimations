
import { Component, OnInit } from '@angular/core';
import { ProjectService } from './../projects.service';
import { Project } from './../project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  createNew: boolean = false;
  projects: Project[];
  progress: string = 'progressing';
  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.projectService.loadProjects()
      .subscribe(
        (projects: Project[]) => {
          this.progress = 'finished';
          this.projects = projects;
      })
  }

}
