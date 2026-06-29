import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { GithubRepository } from '../models/github-repository.model';
import { GithubProfile } from '../models/github.model';
import { GithubLanguage } from '../models/github-language.model';
import { LANGUAGE_COLORS } from '../utils/github-language-colors';
import { forkJoin, map, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private http = inject(HttpClient);

  private api = environment.github.apiUrl;

  private username = environment.github.username;

    getProfile() {

    return this.http.get<GithubProfile>(
      `${this.api}/users/${this.username}`
    );

  }

   getRepositories() {

    return this.http.get<GithubRepository[]>(
      `${this.api}/users/${this.username}/repos?per_page=100`
    );

  }

  getRepository(name: string) {

    return this.http.get<GithubRepository>(
      `${this.api}/repos/${this.username}/${name}`
    );

  }

  getLanguages(repository: string) {

    return this.http.get<Record<string, number>>(
      `${this.api}/repos/${this.username}/${repository}/languages`
    );

  }

  getLanguageStatistics() {

    return this.getRepositories().pipe(

        switchMap(repositories => {

            const requests = repositories

                .filter(repository => !repository.fork)

                .map(repository =>

                    this.getLanguages(repository.name)

                );

            return forkJoin(requests);

        }),

        map(results => {

            const totals: Record<string, number> = {};

            results.forEach(language => {

                Object.entries(language)

                    .forEach(([name, bytes]) => {

                        totals[name] =

                            (totals[name] ?? 0)

                            + bytes;

                    });

            });

            return this.buildLanguageStats(totals);

        })

    );

}

private buildLanguageStats(

totals: Record<string, number>

): GithubLanguage[] {

    const totalBytes = Object.values(totals)

        .reduce(

            (sum, value) => sum + value,

            0

        );

    return Object.entries(totals)

        .map(([name, bytes]) => ({

            name,

            bytes,

            percentage:

                Math.round(

                    bytes

                    / totalBytes

                    * 100

                ),

            color:

                LANGUAGE_COLORS[name]

                ?? '#D4D4D8'

        }))

        .sort(

            (a, b) =>

                b.bytes - a.bytes

        );

}


    
}
