import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RemoteService {
  private apiKey = 'cb289bd6';
  private publicUrl = `http://www.omdbapi.com/?apikey=${this.apiKey}&&`;

  constructor(private httpClient: HttpClient) {}

  public post<REQUEST, RESPONSE>(
    path: string,
    params: HttpParams = new HttpParams(),
    request: REQUEST
  ): Observable<RESPONSE> {
    return this.httpClient
      .post(this.publicUrl + path, JSON.stringify(request), {
        headers: this.setHeaders(),
        params: params,
        observe: 'response',
      })
      .pipe(
        catchError(this.handleErrors),
        map((res: HttpResponse<RESPONSE>) => this.decode(res))
      );
  }

  public get<RESPONSE>(
    path: string,
    params: HttpParams = new HttpParams()
  ): Observable<RESPONSE> {
    return this.httpClient
      .get(this.publicUrl + path, {
        headers: this.setHeaders(),
        params: params,
        observe: 'response',
      })
      .pipe(
        catchError(this.handleErrors),
        map((res: HttpResponse<RESPONSE>) => this.decode(res))
      );
  }

  private decode<RESPONSE>(res: HttpResponse<RESPONSE>): RESPONSE {
    return res.body as RESPONSE;
  }

  private setHeaders(): HttpHeaders {
    let headersConfig = {
      // 'Content-type': 'application/json; charset=utf-8',
      // Accept: 'application/json',
    };

    return new HttpHeaders(headersConfig);
  }

  private handleErrors<ERROR>(error: ERROR) {
    console.error('Error detected in remote.service ' + error);
    return of(error);
  }
}
