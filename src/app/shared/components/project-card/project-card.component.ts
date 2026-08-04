import { Component, computed, input } from '@angular/core';
import { ProjectCard } from '../../../core/models/project-card.model';
import { CardComponent } from "../card/card.component";
import { TechBadgeComponent } from '../tech-badge/tech-badge.component';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from "../button/button.component";

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule, CardComponent, TechBadgeComponent, ButtonComponent],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {
  project = input.required<ProjectCard>();

  languageColor = computed(() => {

    const colors: Record<string, string> = {

      'Angular': '#DD0031',
      'TypeScript': '#3178C6',
      'JavaScript': '#F7DF1E',
      'C#': '#68217A',
      '.NET': '#512BD4',
      'SQL Server': '#CC2927',
      'HTML': '#E34F26',
      'CSS': '#1572B6'

    };

    return colors[this.project().language ?? ''] ?? '#71717A';

  });
}
