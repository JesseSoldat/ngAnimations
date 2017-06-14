import { Project } from './project.model';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

export class ProjectService {
  private projects: Project[] = [
    { name: 'Learn Angular Styles', description: 'Practice hard to understand how you may style components and update styles dynamically', status: 'active'},
    { name: 'Learn Angular Animations', description: 'Learn how Angular helps with animating elements on your page', status: 'active'},
    { name: 'Understanding Angular Basics', description: 'Understand what Angular is, how it works and how and when you might use it', status: 'inactive'},
    { name: 'Learn JavaScript, HTML and CSS', description: 'Absolutely required to dive deep into Angular and all its features', status: 'critical'}
  ];

  loadProjects(): Observable<Project[]> {
    const projectLoader = Observable.create((observer: Observer<Project[]>) => {
      setTimeout(() => {
        observer.next(this.projects)
      }, 1500);
    });
    return projectLoader;
  }
}