import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { DrinksService } from 'src/drinks/services/drinks/drinks.service';
import { drinksDTO } from 'src/DTOs/drinks.DTO';
import { drinksEntity } from 'src/Entities/drinks.Entity';


@ApiTags('Drinks Handler')
@Controller('drinks')
export class DrinksController {

    constructor(
        private readonly drinksService:DrinksService
    ){ }

    @Post()
    @ApiBody({type:drinksEntity})
    @ApiOperation({summary:'creating the drinks'})
    @ApiResponse({status:201, description:'drinks creates'})

    postDrink(@Body() drinksEntity:drinksEntity){

        return this.drinksService.createDrinks(drinksEntity)

    }

    @Get()
    @ApiOperation({summary:'creating the drinks'})
    @ApiResponse({status:201, description:'drinks creates'})

    getDrink():Promise<drinksDTO[]>{
        return this.drinksService.findDrinks()
    }
    
    @Put(':id')
    @ApiParam({name:'id', description:"unique identity of the drinks", type:Number})
    @ApiBody({type:drinksEntity})
    @ApiOperation({summary:'update the drinks '})
    @ApiResponse({status:201, description:'drinks update'})

    updtateDrink(
        @Param(':id') id:number,
        @Body() updateData:Partial<drinksEntity>
       
    ){
        return this.drinksService.updateDrinks(id,updateData);

    }
    @Delete(':id')
    @ApiParam({name:'id', description:'deleted'})
    @ApiOperation({summary:'drink deleted'})

    removeDrink(@Param(':id') id:number){

        return this.drinksService.remove(id)

    }

    


    


}
