import { Component, computed, inject, input } from '@angular/core';
import { ProjectCard } from '../../../../core/models/project-card.model';
import { SectionHeaderComponent } from "../../../../shared/components";
import { ProjectCardComponent } from "../../../../shared/components/project-card/project-card.component";
import { GithubService } from '../../../../core/services/github.service';

@Component({
  selector: 'app-featured-projects-grid',
  standalone: true,
  imports: [SectionHeaderComponent, ProjectCardComponent],
  templateUrl: './featured-projects-grid.component.html',
  styleUrl: './featured-projects-grid.component.scss'
})
export class FeaturedProjectsGridComponent {

  private githubService = inject(GithubService);

  readonly featuredProjects = computed(() =>

    this.githubService.repositories()

      .map(repository => this.githubService.mapRepository(repository))

      .filter(project => project.featured)

  );

  readonly totalStars = computed(() =>

  this.githubService.repositories()

    .reduce((sum, repo) => sum + repo.stargazers_count, 0)

);

  readonly totalForks = computed(() =>

  this.githubService.repositories()

    .reduce((sum, repo) => sum + repo.forks_count, 0)

);

readonly publicRepositories = computed(() =>

  this.githubService.repositories()

    .filter(repo => repo.visibility === 'public')

);

  readonly repositoryCount = computed(() =>

    this.githubService.repositories().length

  );

  readonly topLanguages = computed(() =>

  this.githubService.languages()

    .slice(0, 5)

);

  




}
