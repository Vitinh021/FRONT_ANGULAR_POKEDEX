import { Component,EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'poke-search',
  templateUrl: './poke-search.component.html',
  styleUrls: ['./poke-search.component.scss']
})
export class PokeSearchComponent implements OnInit {

  @Output() public emmitSearch: EventEmitter<string> = new EventEmitter();

  constructor(private router: Router){}

  ngOnInit(): void {
    
  }

  public search(value: string){
    this.emmitSearch.emit(value);
  }

  public createPokemon(){
    this.router.navigate(['/create']); 
  }
}
