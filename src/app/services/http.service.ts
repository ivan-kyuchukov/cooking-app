import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, timer } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) { }

  public get<T>(url: string, showLoad: boolean = true): Observable<T> {
    if (showLoad) {
      return this.onRequestEnd(this.httpClient.get<T>(url));
    }

    return this.httpClient.get<T>(url);
  }

  // public getRequestWithParams<T>(url: string, params: {}, showLoad: boolean = true): Observable<T> {
  //   for (const key in params) {
  //     if (params.hasOwnProperty(key)) {
  //       if (typeof params[key] === 'undefined' || params[key] === null) {
  //         delete params[key];
  //       }
  //     }
  //   }

  //   const queryParams = new HttpParams({ fromObject: params });

  //   if (showLoad) {
  //     return this.onRequestEnd(this.httpClient.get<T>(url, { params: queryParams }));
  //   }

  //   return this.httpClient.get<T>(url, { params: queryParams });
  // }

  // public put<T>(url: string, body: any, options: { [key: string]: any } = null): Observable<T> {
  //   return this.onRequestEnd(this.httpClient.put<T>(url, body, options || this.httpOptions));
  // }

  // public patch<T>(url: string, body: any, options: { [key: string]: any } = null): Observable<T> {
  //   return this.onRequestEnd(this.httpClient.patch<T>(url, body, options || this.httpOptions));
  // }

  // public post<T>(url: string, body: any, options: { [key: string]: any } = null, showLoad: boolean = true): Observable<T> {
  //   if (showLoad) {
  //     return this.onRequestEnd(this.httpClient.post<T>(url, body, options || this.httpOptions));
  //   }

  //   return this.httpClient.post<T>(url, body, this.httpOptions);
  // }

  public delete<T>(url: string): Observable<T> {
    return this.onRequestEnd(this.httpClient.delete<T>(url));
  }

  private onRequestEnd<T>(observable: Observable<T>) {
    return observable.pipe(
      tap(() => {
        timer(50).subscribe(() => {
        });
      }, () => {
      })
    );
  }
}
