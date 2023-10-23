import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokeApiService } from 'src/app/service/poke-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  private urlPokemon: string = "https://localhost:7281/api/Pokemon";
  public name: string = '';
  public description: string = '';
  public type: string = '';
  public id: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private pokeApiService: PokeApiService,
    private router: Router
  ){}
  
  ngOnInit(): void {
    this.getPokemon;
  }

  get getPokemon() {
    const id = this.activatedRoute.snapshot.params['id'];
    if(id){
      return this.pokeApiService.apiGetPokemon(`${this.urlPokemon}/${id}`).subscribe(
        (res) =>{
          this.id = res.id;
          this.name = res.name;
          this.description = res.description;
          this.type = res.type;
        } 
      )
    }
    return
  }

  salvar(): void {

    let dados = {
      "name": this.name,
      "description": this.description,
      "type": parseInt(this.type)
    }

    if(this.id){
      this.pokeApiService.updatePokemon(`${this.urlPokemon}/${this.id}`, dados).subscribe(
        (res) => {
          alert('Pokemon atualizado com sucesso!');
          this.router.navigate(['']);
        }
      );
    }else{
      this.pokeApiService.createPokemon(this.urlPokemon, dados).subscribe(
        (res) => {
          alert('Pokemon salvo com sucesso!');
          this.router.navigate(['']);
        }
      );
    }
  }
}
