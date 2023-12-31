import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, Input, inject, ElementRef } from '@angular/core';
import { Pokemon } from 'src/app/shared/models/pokemon';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss'],
})
export class PokemonCardComponent {
  @Input() pokemon: Pokemon = {} as Pokemon;

  imgType = 'assets/icon/' + this.pokemon.type + '.png';
  el = inject(ElementRef<HTMLImageElement>);

  ngAfterViewInit() {
    const imgElement = this.el.nativeElement.querySelector('.img-pokemon');
    imgElement.src = 'assets/icon/pokebola.gif'; // imagen de carga - pokebola
    setTimeout(() => {
      imgElement.src = this.pokemon.sprite; // ruta de la imagen del Pokemon
    }, 500);
  }

  handleImgError(event: any) {
    event.target.src = 'assets/icon/poke-default.png'; // Ruta de la imagen por defecto en caso de error
  }
}
