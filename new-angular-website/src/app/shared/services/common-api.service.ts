import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CommonApiService {
  private _pokemonSubject = new Subject<any>();
  pokemon$ = this._pokemonSubject.asObservable();

  constructor(private httpClient: HttpClient) {}

  fetchPokemon(pokemonName: string) {
    this.httpClient
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .subscribe(
        (response) => {
          this._pokemonSubject.next(response);
        },
        (error) => {
          console.error("Error fetching Pokémon data:", error);
          this._pokemonSubject.next(null);
        }
      );
  }
}
