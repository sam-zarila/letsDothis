import { Body, Controller, Get, Param, Post, Put,Delete } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { marketEntity } from 'src/Entities/marketListing.Entitty';
import { MarketlistingService } from 'src/marketlisting/services/marketlisting/marketlisting.service';


@ApiTags('Market Items')
@Controller('marketlisting')
export class MarketlistingController {

  constructor(
    private readonly marketService:MarketlistingService
  ){ }
  
  @Post('creating new market item')
  @ApiBody({type:marketEntity})
  @ApiOperation({summary: 'create new market item'})
  @ApiResponse({status:204, description:'market listing created successifully'})

  createItem(){

  }
  @Get('retrieve')
  @ApiOperation({summary:'retrieve all the market items'})
  @ApiResponse({status:204, description:'market listing retrieved successifully'})
  async getItems(){

  }

  @Put(':id')
  @ApiParam({name: 'id', description:'the ID of the item', type:Number})
  @ApiOperation({summary:'update the market item'})
  @ApiBody({type:marketEntity})
  @ApiOperation({summary: 'create new market item'})
  @ApiResponse({status:204, description:'market listing created successifully'})

  updateItem(
    @Param('id') id:number,
    @Body() updateData:Partial<marketEntity>
  ){

  }
 

  



  


}
