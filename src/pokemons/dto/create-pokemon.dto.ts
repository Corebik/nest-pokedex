import { IsInt, IsPositive, IsString, Min, MinLength } from 'class-validator';

export class CreatePokemonDto {
  @IsInt({ message: 'no must be an integer' })
  @IsPositive({ message: 'no must be a positive number' })
  @Min(1, { message: 'no must be at least 1 number' })
  no: number;

  @IsString({ message: 'name must be a string' })
  @MinLength(1, { message: 'name must have at least 1 character' })
  name: string;
}
