import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminModule } from './admin/admin.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { adminEntity } from './Entities/admin.entity';
import { MarketlistingModule } from './marketlisting/marketlisting.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'mysql',
      host:'localhost',
      port:3306,
      username:'root',
      database:'business',
      entities:[adminEntity],
      synchronize:true

    }),
     AdminModule,
     MarketlistingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
