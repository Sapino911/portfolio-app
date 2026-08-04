import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import { SeoModel } from '../models/seo.model';
import { SITE } from '../constants/site.config';

@Injectable({
    providedIn: 'root'
})
export class SeoService {

    private readonly title = inject(Title);
    private readonly meta = inject(Meta);

    update(data: SeoModel): void {

        const title = data.title ?? SITE.title;
        const description = data.description ?? SITE.description;
        const image = data.image ?? SITE.image;
        const url = data.url ?? SITE.url;
        const keywords = data.keywords ?? SITE.keywords;

        this.title.setTitle(title);

        this.meta.updateTag({
            name: 'description',
            content: description
        });

        this.meta.updateTag({
            name: 'keywords',
            content: keywords.join(', ')
        });

        this.meta.updateTag({
            name: 'author',
            content: SITE.author
        });

        this.meta.updateTag({
            property: 'og:title',
            content: title
        });

        this.meta.updateTag({
            property: 'og:description',
            content: description
        });

        this.meta.updateTag({
            property: 'og:image',
            content: image
        });

        this.meta.updateTag({
            property: 'og:url',
            content: url
        });

        this.meta.updateTag({
            property: 'og:type',
            content: 'website'
        });

        this.meta.updateTag({
            name: 'twitter:card',
            content: 'summary_large_image'
        });

        this.meta.updateTag({
            name: 'twitter:title',
            content: title
        });

        this.meta.updateTag({
            name: 'twitter:description',
            content: description
        });

        this.meta.updateTag({
            name: 'twitter:image',
            content: image
        });

    }

}