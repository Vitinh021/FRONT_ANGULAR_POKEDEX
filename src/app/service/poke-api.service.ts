import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//Observable
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  private url: string = 'https://localhost:7281/api/Pokemon';

  constructor(private http: HttpClient) {}

  get apiListAllPokemons():Observable<any>{
    return this.http.get<any>(this.url).pipe(
      tap( res => res)
    )
  }

  public apiGetPokemon( url: string ):Observable<any>{
    return this.http.get<any>(url);
  }

  public removePokemon( url: string ):Observable<any>{
    return this.http.delete<any>(url);
  }

  public createPokemon( url: string, dados: any ):Observable<any>{
    console.log(dados);
    return this.http.post<any>(url, dados);
  }

  public updatePokemon( url: string, dados: any ):Observable<any>{
    return this.http.put<any>(url, dados);
  }
}
