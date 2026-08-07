import { Component, computed, inject, ChangeDetectionStrategy } from '@angular/core';
import { TimelineComponent } from "../../components/timeline/timeline.component";
import { GithubService } from "../../core/services/github.service";
@Component({
    selector: 'app-experience',
    imports: [TimelineComponent],
    templateUrl: './experience.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
/* 
  featuredProjects = computed(() =>

    this.githubService
      .getRepositories()
      .map(repo => this.githubService.mapRepository(repo))
      .filter(project => project.featured)

  ); */

  private githubService = inject(GithubService);
  profile?: any;
}
