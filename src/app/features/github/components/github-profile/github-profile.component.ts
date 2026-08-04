import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { GithubProfile } from '../../../../core/models/github.model';
import { GithubStatCardComponent } from "../github-stat-card/github-stat-card.component";

@Component({
  selector: 'app-github-profile',
  standalone: true,
  imports: [GithubStatCardComponent],
  templateUrl: './github-profile.component.html',
  styleUrl: './github-profile.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GithubProfileComponent {
  profile = input.required<GithubProfile>();
}
