import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';


@ApiTags('Cart Management')
@Controller('cart')
export class CartController {}
