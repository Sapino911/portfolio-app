import { Component } from '@angular/core';

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.scss'
})
export class ProjectDetailsComponent {
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

    screenshots = [
    '..//public/otcmvs-db.png',
    'assets/projects/otcmvs/payments.png',
    'assets/projects/otcmvs/subscriptions.png',
    'assets/projects/otcmvs/users.png'
    ];

    selectedImage = this.screenshots[0];

    changeImage(image: string) {
      this.selectedImage = image;
    }

  activeTab = 'overview';

  setTab(tab: string) {
    this.activeTab = tab;
  }

  showProjectModal = false;
   openProject(){

    this.showProjectModal = true;
  }

  closeProjectModal(): void {

    this.showProjectModal = false;
  }

}
