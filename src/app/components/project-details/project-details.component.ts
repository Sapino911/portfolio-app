import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Project } from '../../core/models/project.model';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [NgClass],
  templateUrl: './project-details.component.html',
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
  
/*   protected readonly badges = [
    { icon: '', title: 'Angular'},
    { icon: '', title: '.Net Core 8'},
    { icon: '', title: 'SQL Server'},
    { icon: '', title: 'TailwindCss'},
    { icon: '', title: 'JWT'},
    { icon: '', title: 'Stripe'},
    { icon: '', title: 'Chart.js'},
    { icon: '', title: 'Azure'}
  ]

    screenshots = [
    '..//public/otcmvs-db.png',
    '..//public/otcmvs-um.png',
    '..//public/otcmvs-sm.png',
    '..//public/otcmvs-subm.png',
    '..//public/otcmvs-pmnt.png'
    ];

    selectedImage = this.screenshots[0];

    changeImage(image: string) {
      this.selectedImage = image;
    }

  activeTab = 'overview';

  setTab(tab: string) {
    this.activeTab = tab;
  }
 */
  

}
