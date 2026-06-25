import { Component } from '@angular/core';
import { ProjectDetailsComponent } from '../project-details/project-details.component';


@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [ProjectDetailsComponent],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class  ProjectCardComponent {


   showProjectModal = false;
   selectedProduct: any = null;
   openProjectModal(){

    this.showProjectModal = true;
  }

  closeProjectModal() {

    this.showProjectModal = false;
  }
}
