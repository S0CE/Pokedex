import { Controller, Post, Body, HttpException } from '@nestjs/common';
import { AppService, PokemonService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
    private readonly pokemonService: PokemonService) {}

    @Post('/api')
  async getPokemon(@Body() id: any) {
    const onlyNumbers = this.appService.is_number(id.number);

    if (onlyNumbers === true)
      return this.pokemonService.getPokemonInfo(id.number);
    else {
      throw new HttpException('Bad format', 404)
    }
  }
}
