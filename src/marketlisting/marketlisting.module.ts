import { Module } from '@nestjs/common';
import { MarketlistingController } from './controllers/marketlisting/marketlisting.controller';
import { MarketlistingService } from './services/marketlisting/marketlisting.service';

@Module({
  controllers: [MarketlistingController],
  providers: [MarketlistingService]
})
export class MarketlistingModule {}
