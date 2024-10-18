import { Module } from '@nestjs/common';
import { DrinksController } from './controllers/drinks/drinks.controller';
import { DrinksService } from './services/drinks/drinks.service';

@Module({
  controllers: [DrinksController],
  providers: [DrinksService]
})
export class DrinksModule {}
