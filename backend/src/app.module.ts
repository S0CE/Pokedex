import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService, PokemonService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, PokemonService],
})
export class AppModule {}
