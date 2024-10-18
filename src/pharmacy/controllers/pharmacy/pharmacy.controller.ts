import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { pharmarcyDTO } from 'src/DTOs/pharmacy.DTO';
import { pharmarcyEntity } from 'src/Entities/pharmacy.Entity';
import { PharmacyService } from 'src/pharmacy/services/pharmacy/pharmacy.service';


@ApiTags('Pharmarcy Handler')
@Controller('pharmacy')
export class PharmacyController {

    constructor(
        private readonly pharmarcyService:PharmacyService
    ){ }

    @Post()
    @ApiBody({type:pharmarcyEntity})
    @ApiOperation({summary:'pharmacy post made'})
    @ApiResponse({status:201, description:'created'})

    postPharmacy(@Body() pharmarcyEntity:pharmarcyEntity){

        return this.pharmarcyService.createPharmarcy(pharmarcyEntity)

    }
    @Get()
    @ApiOperation({summary:'pharmacy post made'})
    @ApiResponse({status:201, description:'created'})
    getAll() :Promise<pharmarcyDTO[]>{
        return this.pharmarcyService.findPharmarcy()
    }



}
