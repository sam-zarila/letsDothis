import { Module } from '@nestjs/common';
import { PharmacyController } from './controllers/pharmacy/pharmacy.controller';
import { PharmacyService } from './services/pharmacy/pharmacy.service';

@Module({
  controllers: [PharmacyController],
  providers: [PharmacyService]
})
export class PharmacyModule {}
