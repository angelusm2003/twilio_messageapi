import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  sendMessage(to: string, message: string): Observable<string> {
    return this.http.post(`${this.baseUrl}/messages`, { to, message }, { responseType: 'text' })
      .pipe(
        catchError(this.handleError)
      );
  }


  getMessages(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/messages`);
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
}

 

