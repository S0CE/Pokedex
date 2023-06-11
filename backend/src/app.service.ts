import { Injectable } from '@nestjs/common';
import { PokemonClient } from 'pokenode-ts';

const PokemonAPI = new PokemonClient;

@Injectable()
export class AppService {
  getMessage(str: string): string {
    return str;
  }

  is_number(str: string): boolean {
    for (let i = 0; i < str.length; i++) {
      if (isNaN(parseInt(str[i])))
        return false
    }
    return true;
  }
}

@Injectable()
export class PokemonService {
  async getPokemonInfo(id: number) {
    const result = await PokemonAPI.getPokemonById(id)
    return result;
  }
}
