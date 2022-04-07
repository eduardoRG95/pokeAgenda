import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemons } from '../Pokemons.model';

@Injectable({
  providedIn: 'root'
})
export class PokeService {

  apiUrl = "https://pokeapi.co/api/v2/pokemon/";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(
    private httpClient: HttpClient
  ) { }

  public getPokes(): Observable<Pokemons> {
    return this.httpClient.get<Pokemons>(this.apiUrl);
  }
}
