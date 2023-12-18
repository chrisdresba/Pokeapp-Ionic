import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { PokemonCardComponent } from '../components/pokemon-card/pokemon-card.component';
import { PokeapiService } from '../shared/services/pokeapi.service';
import { DefaultCardComponent } from '../components/default-card/default-card.component';
import { SpinnerComponent } from '../components/spinner/spinner.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, HomePageRoutingModule],
  declarations: [
    HomePage,
    PokemonCardComponent,
    DefaultCardComponent,
    SpinnerComponent,
  ],
  providers: [PokeapiService],
})
export class HomePageModule {}
