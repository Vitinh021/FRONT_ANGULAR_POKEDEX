import { Component, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/service/poke-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit{
  public allPokemons: any;
  private setAllPokemons: any;
  private urlPokemon: string = "https://localhost:7281/api/Pokemon";

  constructor(
    private pokeApiService: PokeApiService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.pokeApiService.apiListAllPokemons.subscribe(
      res => {
        this.setAllPokemons = res;
        this.allPokemons = this.setAllPokemons;
      }
    );
  }

  public getSearch(value: string){
    const filter = this.setAllPokemons.filter( (res: any) =>{
      return !res.name.toLowerCase().indexOf(value.toLowerCase());
    });

    this.allPokemons = filter;
  }

  getTypeName(type: number): string {
    switch (type) {
      case 0:
        return "Fogo";
      case 1:
        return "Água";
      case 2:
        return "Terra";
      case 3:
        return "Ar";
      default:
        return "desconhecido";
    }
  }

  public removerItem(id: any) {
    console.log(`${this.urlPokemon}/${id}`);
    return this.pokeApiService.removePokemon(`${this.urlPokemon}/${id}`).subscribe(
      (res) => {
        alert('Item removido com sucesso:');
        this.router.navigate(['']);
      }
    );
  }
}
