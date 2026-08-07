import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { GithubService } from '../../core/services/github.service';
import { CounterComponent } from "../../shared/counter/counter.component";
import { toSignal } from '@angular/core/rxjs-interop';


@Component({
    selector: 'app-stats',
    standalone: true,
    imports: [CounterComponent],
    templateUrl: './stats.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './stats.component.scss'
})
export class StatsComponent {
  /* languageStats: any; */

  /* constructor(private githubService: GithubService){} */


}
