import {
    computed,
    inject,
    Injectable,
    signal
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { GithubRepository } from '../models/github-repository.model';
import { GithubProfile } from '../models/github.model';
import { GithubLanguage } from '../models/github-language.model';
import { LANGUAGE_COLORS } from '../utils/github-language-colors';
import { forkJoin, map, switchMap } from 'rxjs';
import { FEATURED_REPOSITORIES } from '../utils/featured-repositories';
import { ProjectCard } from '../models/project-card.model';

@Injectable({
    providedIn: 'root'
})
export class GithubService {

    private http = inject(HttpClient);

    private api = environment.github.apiUrl;

    private username = environment.github.username;

    // State

    private readonly _profile = signal<GithubProfile | null>(null);

    private readonly _repositories = signal<GithubRepository[]>([]);

    private readonly _languages = signal<GithubLanguage[]>([]);

    private readonly _loading = signal(false);

    private readonly _error = signal<string | null>(null);

    // Public readonly state

    readonly profile = this._profile.asReadonly();

    readonly repositories = this._repositories.asReadonly();

    readonly languages = this._languages.asReadonly();

    readonly loading = this._loading.asReadonly();

    readonly error = this._error.asReadonly();

    mapRepository(repository: GithubRepository): ProjectCard {

        return {

            id: repository.id,

            title: repository.name,

            subtitle: repository.language,

            description: repository.description,

            technologies: repository.topics,

            language: repository.language,

            githubUrl: repository.html_url,

            liveDemo: repository.homepage,

            stars: repository.stargazers_count,

            forks: repository.forks_count,

            updatedAt: repository.updated_at,

            featured: FEATURED_REPOSITORIES.includes(repository.name),

            status: repository.visibility === 'private'
                ? 'Private'
                : 'Production'

        };

    }
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

    private calculateLanguageStatistics(
        repositories: GithubRepository[]
    ) {

        const requests = repositories

            .filter(repository => !repository.fork)

            .map(repository =>
                this.getLanguages(repository.name)
            );

        return forkJoin(requests).pipe(

            map(results => {

                const totals: Record<string, number> = {};

                results.forEach(language => {

                    Object.entries(language).forEach(([name, bytes]) => {

                        totals[name] = (totals[name] ?? 0) + bytes;

                    });

                });

                return this.buildLanguageStats(totals);

            })

        );

    }

    load(): void {

        this._loading.set(true);
        this._error.set(null);

        forkJoin({

            profile: this.getProfile(),
            repositories: this.getRepositories()

        }).subscribe({

            next: result => {

                this._profile.set(result.profile);
                this._repositories.set(result.repositories);

                this._loading.set(false);

            },

            error: error => {

                console.error(error);

                this._loading.set(false);

                this._error.set('Unable to load GitHub data.');

            }

        });

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
