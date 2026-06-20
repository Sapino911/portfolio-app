import { Component } from '@angular/core';

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [],
  templateUrl: './certifications.component.html',
  styleUrl: './certifications.component.scss'
})
export class CertificationsComponent {
  
  protected readonly certifications = [
    { icon: 'i', title: 'Microsoft Azure Fundamentals', text: 'Microsoft Learn'},
    { icon: 'i', title: 'PL-300: Microsoft Power BI Data Analyst', text: 'Microsoft Learn'},
    { icon: 'i', title: 'Angular - The Complete Guide', text: 'Microsoft LearnUdemy'},
    { icon: 'i', title: 'ASP.NET Core Web Api', text: 'Udemy'},
    { icon: 'i', title: 'Business Analysis Fundamentals', text: 'Linkedn Learning'}
  ]

}
