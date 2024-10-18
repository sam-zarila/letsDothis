import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
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


}
