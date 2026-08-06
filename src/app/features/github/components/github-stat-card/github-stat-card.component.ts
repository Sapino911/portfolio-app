import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
    selector: 'app-github-stat-card',
    imports: [],
    templateUrl: './github-stat-card.component.html',
    styleUrl: './github-stat-card.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GithubStatCardComponent {
  icon = input.required<string>();

  title = input.required<string>();

  value = input.required<number>();
}
