import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { CharacterDataWrapper } from '../model/characterDataWrapper.model';
import { Bitacora } from '../model/bitacora.model';
@Injectable({
  providedIn: 'root',
})
export class conexionService {
  // Base url
  baseurl = 'http://localhost:8080/character';
  constructor(private http: HttpClient) {}
  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE',
      'Access-Control-Allow-Origin':'localhost',
      'Accept':'application/json'
    }),
  };
  // GET
  getListCharacters(): Observable<CharacterDataWrapper> {
    return this.http
      .get<CharacterDataWrapper>(this.baseurl + '/list/0/0')
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // GET
  getCharacterById(id: number): Observable<CharacterDataWrapper> {
    return this.http
      .get<CharacterDataWrapper>(this.baseurl + '/char/' + id)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // GET
  getBitacora(): Observable<Bitacora[]> {
    return this.http
      .get<Bitacora[]>(this.baseurl + '/getlog')
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Error handling
  errorHandl(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}