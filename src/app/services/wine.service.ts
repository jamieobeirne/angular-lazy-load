import { Injectable } from '@angular/core';
import { Wine } from '../models/Wine';

import { Observable, of } from 'rxjs';          /* not from pathways in the book*/
import { throwError as ObservableThrow } from 'rxjs'; /*not _throw*/
import { of as ObservableOf } from 'rxjs';
import { WineQuantityChange } from '../models/WineQuantityChange';

import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { HttpEvent } from '@angular/common/http';
import { UserStoreService } from './user-store.service';


@Injectable(
  {
    providedIn: "root",
  }
)
export class WineService {
  private wines: Wine[];
  private wine_endpoint = "https://wine-server-heroku.herokuapp.com/api/wine";
  constructor(private http: HttpClient) { }

  getWine(id: string): Observable<Wine> {
    return this.http.get<Wine>(this.wine_endpoint + id)
  }

  getWines(): Observable<Wine[]> {
    console.log();
    return this.http.get<Wine[]>(this.wine_endpoint);
  }

  getWinesSearch(query: string): Observable<Wine[]> {
    console.log(query);
    return this.http.get<Wine[]>(this.wine_endpoint + `?q=${query}`);
  }

  createWine(wine: Wine): Observable<any> {
    return this.http.post(this.wine_endpoint, wine);
  }

  changeQuantity(id: number, newQuantity: number): Observable<Wine> {
    return this.http.patch<Wine>(this.wine_endpoint + id,
      {
        changeInQuantity: newQuantity
      });
  }

  makeFailingCall() {
    return this.http.get(this.wine_endpoint + 'fail');
  }

}
