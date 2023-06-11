import { Injectable } from '@nestjs/common';
import {} from 'pokenode-ts';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}

@Injectable()
export class PokemonService {
  
}
