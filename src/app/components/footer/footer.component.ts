import { Component } from '@angular/core';
import { ProjectDetailsComponent } from "../../components/project-details/project-details.component";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ProjectDetailsComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
