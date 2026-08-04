import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { GithubRepository } from '../../../../core/models/github-repository.model';
import { ButtonComponent } from "../../../../shared/components/button/button.component";
import { TechBadgeComponent } from "../../../../shared/components/tech-badge/tech-badge.component";
import { CardComponent } from "../../../../shared/components/card/card.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-repository-card',
  standalone: true,
  imports: [CommonModule, ButtonComponent, TechBadgeComponent, CardComponent],
  templateUrl: './repository-card.component.html',
  styleUrl: './repository-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RepositoryCardComponent {
  repository = input.required<GithubRepository>();

  updatedDate = computed(() =>
    new Date(this.repository().updated_at)
  );
}
