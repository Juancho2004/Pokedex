import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from 'src/app/service/pokemon.service';

@Component({
  selector: 'app-poke-detail',
  templateUrl: './poke-detail.component.html',
  styleUrls: ['./poke-detail.component.css']
})
export class PokeDetailComponent implements OnInit{

  pokemon: any = '';
  pokemonType = [];
  pokemonAbilities = [];
  pokemonStats = [];
  pokemonStat = [];
  pokemonStats1 = [];
  pokemonStat1 = [];
  pokemonStats2 = [];
  pokemonStat2 = [];
  pokemonStats3 = [];
  pokemonStat3 = [];
  pokemonStats4 = [];
  pokemonStat4 = [];
  pokemonStats5 = [];
  pokemonStat5 = [];
  pokemonImg = [];

  constructor(private pokemonService: PokemonService, private activatedRoute: ActivatedRoute){
    this.activatedRoute.params.subscribe(
      params=> {
        this.getPokemon(params['id'])
      }
    )
  }

  ngOnInit(): void {
    this.pokemon;
  }

  getPokemon(id:number ){
    this.pokemonService.getPokemon(id).subscribe(
      res => {
        this.pokemon = res;
        this.pokemonImg = this.pokemon.sprites.other.dream_world.front_default;
        this.pokemonType = res.types[0].type.name;
        this.pokemonAbilities = res.abilities[0].ability.name;
        this.pokemonStats = res.stats[0].stat.name;
        this.pokemonStat = res.stats[0].base_stat;
        this.pokemonStats1 = res.stats[1].stat.name;
        this.pokemonStat1 = res.stats[1].base_stat;
        this.pokemonStats2 = res.stats[2].stat.name;
        this.pokemonStat2 = res.stats[2].base_stat;
        this.pokemonStats3 = res.stats[3].stat.name;
        this.pokemonStat3 = res.stats[3].base_stat;
        this.pokemonStats4 = res.stats[4].stat.name;
        this.pokemonStat4 = res.stats[4].base_stat;
        this.pokemonStats5 = res.stats[5].stat.name;
        this.pokemonStat5 = res.stats[5].base_stat;
        console.log(res)
      },
      err => {
        console.log(err)
      }
    )
  }
}
