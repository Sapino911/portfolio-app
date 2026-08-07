import { Component, computed, inject, ChangeDetectionStrategy } from '@angular/core';
import { TimelineComponent } from "../../components/timeline/timeline.component";
import { map } from 'rxjs/operators';
import { CertificationsComponent } from "../../components/certifications/certifications.component";
import { StatsComponent } from "../../components/stats/stats.component";
import { GithubSectionComponent } from "../../components/github-section/github-section.component";
import { SkeletonComponent } from "../../shared/components/skeleton/skeleton.component";
import { GithubService } from '../../core/services/github.service';
import { LoadingSpinnerComponent } from "../../shared/components/loading-spinner/loading-spinner.component";
import { ButtonComponent } from "../../shared/components/button/button.component";
import { RepositoryCardComponent } from "../../features/github/components/repository-card/repository-card.component";
import { FEATURED_REPOSITORIES } from '../../core/utils/featured-repositories';
import { GithubComponent } from "../../features/github/components/github/github.component";

@Component({
    selector: 'app-experience',
    imports: [TimelineComponent, CertificationsComponent, StatsComponent, GithubSectionComponent, SkeletonComponent, LoadingSpinnerComponent, ButtonComponent, RepositoryCardComponent, GithubComponent],
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
