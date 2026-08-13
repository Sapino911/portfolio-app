import { Component, ChangeDetectionStrategy } from '@angular/core';
import { fadeAnimation, slideUpAnimation } from '../../shared/animations';
import { CounterComponent } from '../../shared/counter/counter.component';
import { LucideHouse, LucideUser, LucideSettings, LucideBriefcase } from '@lucide/angular';


@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CounterComponent],
  animations: [slideUpAnimation, fadeAnimation],
  templateUrl: './hero.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {

  readonly LucideHouse = LucideHouse;
  readonly LucideUser = LucideUser;
  readonly LucideSettings = LucideSettings;
  readonly LucideBriefcase = LucideBriefcase;

  protected readonly badges = [
    { icon: LucideHouse, title: 'Angular' },
    { icon: LucideUser, title: '.Net Core' },
    { icon: LucideSettings, title: 'SQL Server' },
    { icon: LucideBriefcase, title: 'Azure' }
  ]
}
