import { Component, inject, effect, ChangeDetectionStrategy } from '@angular/core';
import { GithubService } from '../../../../core/services/github.service';
import { GithubProfileComponent } from "../github-profile/github-profile.component";

import { GithubLanguagesComponent } from "../github-languages/github-languages.component";

@Component({
    selector: 'app-github',
    standalone: true,
    imports: [GithubProfileComponent],
    templateUrl: './github.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './github.component.scss'
})
export class GithubComponent {

  readonly github = inject(GithubService);

constructor() {

  console.log('GithubComponent Loaded');

  this.github.load();

}


}

