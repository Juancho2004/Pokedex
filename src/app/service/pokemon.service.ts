import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  apiUrl= 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) {}

  getPokemon(index: any){
    return this.http.get<any>(`${this.apiUrl}/pokemon/${index}`)
  }
}
