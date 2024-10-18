import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminModule } from './admin/admin.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { adminEntity } from './Entities/admin.entity';
import { MarketlistingModule } from './marketlisting/marketlisting.module';
import { marketEntity } from './Entities/marketListing.Entitty';
import { CartModule } from './cart/cart.module';
import { CartEntity } from './Entities/addToCart.Entity';
import { DrinksModule } from './drinks/drinks.module';
import { drinksEntity } from './Entities/drinks.Entity';
import { PharmacyModule } from './pharmacy/pharmacy.module';
import { BakeryModule } from './bakery/bakery.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'mysql',
      host:'localhost',
      port:3306,
      username:'root',
      database:'business',
      entities:[adminEntity, marketEntity, CartEntity, drinksEntity],
      synchronize:true

    }),
     AdminModule,
     MarketlistingModule,
     CartModule,
     DrinksModule,
     PharmacyModule,
     BakeryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
