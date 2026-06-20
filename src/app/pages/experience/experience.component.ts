import { Component } from '@angular/core';
import { TimelineComponent } from "../../components/timeline/timeline.component";
import { CertificationsComponent } from "../../components/certifications/certifications.component";
import { StatsComponent } from "../../components/stats/stats.component";

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [TimelineComponent, CertificationsComponent, StatsComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {

}
