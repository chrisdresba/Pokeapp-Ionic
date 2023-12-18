import { Component, inject } from '@angular/core';
import { Pokemon } from 'src/app/shared/models/pokemon';
import { PokeapiService } from '../shared/services/pokeapi.service';
import { PokemonCardComponent } from '../components/pokemon-card/pokemon-card.component';
import { LoadingService } from '../shared/services/loading.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  pokemonTeam: Pokemon[] = [];
  poke: Pokemon = {} as Pokemon;
  view: boolean = false;

  pokeapiService = inject(PokeapiService);
  service = inject(LoadingService);

  ngOnInit(): void {
    this.getRandomPokemon();
  }

  getRandomPokemon(): void {
    this.service.show(); // show loading spinner
    this.view = false;
    this.pokeapiService.getTeamOfFourRandomPokemon().subscribe((pokemons) => {
      this.pokemonTeam = pokemons;
    });
    setTimeout(() => {
      this.service.hide();
    }, 300);
  }

  selectTypePokemon(type: string): void {
    this.service.show(); // show loading spinner
    this.pokemonTeam.forEach((pokemon) => {
      if (pokemon.type === type) {
        this.poke = pokemon;
      }
    });
    this.view = true;
    setTimeout(() => {
      this.service.hide();
    }, 300);
  }
}
