import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AxiosAdapter } from 'src/common/adapters/axios.adapter';
import { Pokemon } from 'src/pokemons/entities/pokemon.entity';
import { PokeResponse } from './interfaces/poke-response.interface';

type PokemonInsert = { name: string; no: number };

@Injectable()
export class SeedService {
  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>,
    private readonly httpAxios: AxiosAdapter,
  ) {}

  async executeSeed() {
    await this.pokemonModel.deleteMany({}); // delete * from pokemons
    const data = await this.httpAxios.get<PokeResponse>(
      'https://pokeapi.co/api/v2/pokemon?limit=25',
    );

    const pokemonsToInsert: PokemonInsert[] = data.results.map(
      ({ name, url }) => {
        const segments = url.split('/');
        const no = +segments[segments.length - 2];
        return { name, no };
      },
    );

    await this.pokemonModel.insertMany(pokemonsToInsert);

    return 'Seed executed';
  }
}
