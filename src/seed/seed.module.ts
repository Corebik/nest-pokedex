import { Module } from '@nestjs/common';
import { CommonModule } from 'src/common/common.module';
import { PokemonsModule } from 'src/pokemons/pokemons.module';
import { SeedController } from './seed.controller';
import { SeedService } from './seed.service';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [PokemonsModule, CommonModule],
})
export class SeedModule {}
