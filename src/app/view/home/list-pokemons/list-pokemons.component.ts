import { Component, OnInit } from '@angular/core';
import { throwIfEmpty } from 'rxjs';
import { Poke } from 'src/app/shared/poke.model';
import { Pokemons } from 'src/app/shared/Pokemons.model';

import { PokeService } from './../../../shared/services/poke.service'

@Component({
  selector: 'app-list-pokemons',
  templateUrl: './list-pokemons.component.html',
  styleUrls: ['./list-pokemons.component.css']
})
export class ListPokemonsComponent implements OnInit {

  constructor(public pokeService: PokeService) { }

  pokemons: Poke[] = [];

  ngOnInit(): void {
    this.getPoke();
  }

  getPoke() {
    this.pokeService.getPokes().subscribe(data => {
      this.pokemons = data.results;
    });
  }
}
