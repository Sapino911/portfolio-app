import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { GithubLanguage } from '../../../../core/models/github-language.model';

@Component({
    selector: 'app-github-languages',
    imports: [],
    templateUrl: './github-languages.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './github-languages.component.scss'
})
export class GithubLanguagesComponent {
  languages = input.required<GithubLanguage[]>(); 
}
