import { Component } from '@angular/core';
import { ProjectOneComponent } from '../../projects/project-one/container/project-one.component';
import { ProjectTwoComponent } from '../../projects/project-two/container/project-two.component';

@Component({
  selector: 'projects',
  standalone: true,
  imports: [ProjectOneComponent, ProjectTwoComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {}
