import { Component, inject, effect } from '@angular/core';
import { GithubService } from '../../../../core/services/github.service';
import { GithubProfileComponent } from "../github-profile/github-profile.component";
import { CommonModule } from '@angular/common';
import { GithubLanguagesComponent } from "../github-languages/github-languages.component";

@Component({
  selector: 'app-github',
  standalone: true,
  imports: [CommonModule, GithubProfileComponent, GithubLanguagesComponent],
  templateUrl: './github.component.html',
  styleUrl: './github.component.scss'
})
export class GithubComponent {

  readonly github = inject(GithubService);

constructor() {

  console.log('GithubComponent Loaded');

  this.github.load();

}


}

