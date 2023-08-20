import { Component, Input } from '@angular/core';
import { projects } from 'src/models/projects';

@Component({
  selector: 'app-single-project',
  templateUrl: './single-project.component.html',
  styleUrls: ['./single-project.component.scss'],
})
export class SingleProjectComponent {
  @Input() project: any;
  @Input() projectNumber: any;
  @Input() projectRevers: boolean = false;
  projectList = projects;
}
