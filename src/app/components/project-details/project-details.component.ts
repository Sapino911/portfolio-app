import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import { Project } from '../../core/models/project.model';
import { fadeAnimation, modalAnimation, scaleAnimation, slideUpAnimation } from '../../shared/animations';

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [],
  animations: [fadeAnimation, modalAnimation, scaleAnimation, slideUpAnimation],
  templateUrl: './project-details.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './project-details.component.scss'
})
export class ProjectDetailsComponent implements OnChanges {

  @Input() project!: Project;

  @Input() isOpen = false;

  @Output()

  selectedImage!: string;

  close = new EventEmitter<void>();

  closeModal(): void {

    this.close.emit();

  }
  //Implement OnChanges so that whenever a different project is opened, the hero image is reset
  ngOnChanges(changes: SimpleChanges): void {

    if (changes['project'] && this.project) {
      this.selectedImage = this.project.heroImage;
    }

  }

  tabs = [
    'overview',
    'features',
    'architecture',
    'challenges',
    'lessons'
  ] as const;

  activeTab = 'overview';

  setTab(tab: typeof this.tabs[number]) {
    this.activeTab = tab;
  }

  getFeatureIcon(icon: string): string {

    switch (icon) {

      case 'calendar':
        return '📅';

      case 'credit-card':
        return '💳';

      case 'dashboard':
        return '📊';

      case 'users':
        return '👥';

      case 'music':
        return '🎵';

      case 'settings':
        return '⚙️';

      case 'reports':
        return '📈';

      default:
        return '✨';
    }

  }
}
