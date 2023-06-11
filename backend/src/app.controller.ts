import { Controller, Get } from '@nestjs/common';
import { AppService, PokemonService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
    private readonly pokemonService: PokemonService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
