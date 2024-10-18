import { Body, Controller, Get, HttpException, HttpStatus, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CartService } from 'src/cart/services/cart/cart.service';
import { addToCartDto } from 'src/DTOs/addToCart.DTO';
import { CartEntity } from 'src/Entities/addToCart.Entity';


@ApiTags('Cart Management')
@Controller('cart')
export class CartController {
    constructor(

        private readonly cartService:CartService
    ){}
    @Post()
    async addTocart(
        @Body() addTocart:addToCartDto
    ){

        try {
            const result =await this.cartService.addTocart(addTocart)
            return result
            
        } catch (error) {
            throw new HttpException('Could not add item to cart', HttpStatus.BAD_REQUEST);
            
        }}
   @Get()
   async getCartItems(): Promise<CartEntity[]>{
    try {
        const cartItems = await this.cartService.getCartItems();
        return cartItems;
        
    } catch (error) {
        throw new HttpException('Could not fetch cart items', HttpStatus.BAD_REQUEST);
        
    }

   }     
}
