import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class marketEntity{
    @PrimaryGeneratedColumn()
    id:number

    @ApiProperty({description:'image of the item'})
    @Column()
    image:string

    @ApiProperty({description:'description of the item'})
    @Column()
    description:string

    @ApiProperty({description:'price of the item'})
    @Column()
    price:string

    @ApiProperty({description:'image of the item'})
    @Column()

    location:string


}