import { Component, Input } from '@angular/core';
import { Project } from '../../core/models/project.model';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.scss'
})
export class ProjectDetailsComponent {

   @Input() project!: Project;

  @Input() isOpen = false;

  @Output()

close = new EventEmitter<void>();

closeModal(): void {

    this.close.emit();

}

activeTab:
'overview'
| 'features'
| 'architecture'
| 'challenges'
| 'lessons'
= 'overview';

setTab(tab: typeof this.activeTab): void {
  this.activeTab = tab;
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
