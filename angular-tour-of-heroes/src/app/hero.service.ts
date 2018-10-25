import { Injectable } from '@angular/core';
import {HeroesClass} from './heroes-class';
import {HEROES} from './mock-heroes';
import {Observable, of} from 'rxjs';
import {MessageService} from './message.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(private http: HttpClient,
              private messageService: MessageService) { }
  // getHeroes(): HeroesClass[] {
//  return HEROES;
// }

  private heroesUrl = 'api/heroes';  // URL to web api
  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
  getHeroes(): Observable<HeroesClass[]> {
    // TODO: send the message _after_ fetching the heroes
   //  this.messageService.add('HeroService: fetched heroes');
    // return of(HEROES);
    return this.http.get<HeroesClass[]>(this.heroesUrl)
      .pipe(
        tap(heroes => this.log('fetched heroes')),
        catchError(this.handleError('getHeroes', []))
    );
  }
  /** GET hero by id. Will 404 if id not found */
  getHero(id: number): Observable<HeroesClass> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<HeroesClass>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<HeroesClass>(`getHero id=${id}`))
    );
  }
 /** getHero(id: number): Observable<HeroesClass> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }*/

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


  /** PUT: update the hero on the server */
  updateHero (hero: HeroesClass): Observable<any> {
    return this.http.put(this.heroesUrl, hero, httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${hero.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }
  addHero (hero: HeroesClass): Observable<HeroesClass> {
    return this.http.post<HeroesClass>(this.heroesUrl, hero, httpOptions).pipe(
      tap((hero: HeroesClass) => this.log(`added hero w/ id=${hero.id}`)),
      catchError(this.handleError<HeroesClass>('addHero'))
    );
  }
  /** DELETE: delete the hero from the server */
  deleteHero (hero: HeroesClass | number): Observable<HeroesClass> {
    const id = typeof hero === 'number' ? hero : hero.id;
    const url = `${this.heroesUrl}/${id}`;

    return this.http.delete<HeroesClass>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<HeroesClass>('deleteHero'))
    );
  }

  /* GET heroes whose name contains search term */
  searchHeroes(term: string): Observable<HeroesClass[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<HeroesClass[]>(`${this.heroesUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`found heroes matching "${term}"`)),
      catchError(this.handleError<HeroesClass[]>('searchHeroes', []))
    );
  }
}
