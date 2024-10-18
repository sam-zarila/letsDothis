import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { DrinksService } from 'src/drinks/services/drinks/drinks.service';
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
}
