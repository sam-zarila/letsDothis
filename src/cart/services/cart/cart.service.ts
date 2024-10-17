import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { addToCartDto } from 'src/DTOs/addToCart.DTO';
import { CartEntity } from 'src/Entities/addToCart.Entity';
import { Repository } from 'typeorm';

@Injectable()
export class CartService {

    constructor(
        @InjectRepository(CartEntity) private addTocartRepository:Repository<CartEntity>
    ){}

    async  addTocart(addToCart:addToCartDto) : Promise<{message:string}>{

        const {item,quantity,image,name,description,price,location} = addToCart;
    
        console.log('adding to cart:',{item,quantity,image,name,description,price,location});
    
        try {
    
          const existingItem = await this.addTocartRepository.findOne({where:{item}})

          if (existingItem) {
            existingItem.quantity +=quantity
            await this.addTocartRepository.save(existingItem);
            return {message:'Item quatinty updated in your cart'}
            
          }
          
        } catch (error) {
          
        }
    
      }


}
