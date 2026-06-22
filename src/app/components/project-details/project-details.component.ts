import {
  Component,
  Input,
  Output,
  EventEmitter,
  signal,
  HostListener
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../core/models/project';

type ProjectTab =
  | 'overview'
  | 'features'
  | 'architecture'
  | 'challenges'
  | 'lessons';


@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.scss'
})
export class ProjectDetailsComponent {
   @Input() project!: Project;
     @Output() close =
    new EventEmitter<void>();

  activeTab =
    signal<ProjectTab>('overview'); 
  /* activeTab = 'overview';

  setTab(tab: string) {
    this.activeTab = tab;
  }  */

  selectedImage =
    signal('');


   ngOnInit(): void {

    if (
      this.project &&
      this.project.screenshots.length
    ) {
      this.selectedImage.set(
        this.project.screenshots[0]
      );
    }
  }

  setTab(tab: ProjectTab): void {
    this.activeTab.set(tab);
  } 

  selectImage(image: string): void {
    this.selectedImage.set(image);
  }

  closeModal(): void {
    this.close.emit();
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {

  this.closeModal();
  }

  onBackdropClick(
  event: MouseEvent
  ): void {

  if (
    event.target ===
    event.currentTarget
  ) {
    this.closeModal();
  }
}
  
   /* activeTab = 'overview';

  setTab(tab: string) {
    this.activeTab = tab;
  } */


  protected readonly badges = [
    { icon: '', title: 'Angular'},
    { icon: '', title: '.Net Core 8'},
    { icon: '', title: 'SQL Server'},
    { icon: '', title: 'Tailwind Css'},
    { icon: '', title: 'Typescript'},
    { icon: '', title: 'JWT'},
    { icon: '', title: 'Stripe'},
    { icon: '', title: 'Chart.js'},
    { icon: '', title: 'Azure'}
  ]

   /*  screenshots = [
    '..//public/otcmvs-db.png',
    'assets/projects/otcmvs/payments.png',
    'assets/projects/otcmvs/subscriptions.png',
    'assets/projects/otcmvs/users.png'
    ];

    selectedImage = this.screenshots[0];

    changeImage(image: string) {
      this.selectedImage = image;
    } */

 

}
