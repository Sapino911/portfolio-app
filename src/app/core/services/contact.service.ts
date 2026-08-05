import { inject, Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { ContactRequest } from '../models/contact-request.model';

import { ContactResponse } from '../models/contact-response.model';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ContactService {

    private readonly http = inject(HttpClient);

    private readonly api = `${environment.api.baseUrl}/contact`;

    send(request: ContactRequest): Observable<ContactResponse> {

        return this.http.post<ContactResponse>(

            this.api,

            request

        );

    }

}