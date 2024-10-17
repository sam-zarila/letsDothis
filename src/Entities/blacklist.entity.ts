import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()

  export class Blacklist{
    @PrimaryGeneratedColumn()
     id: number

     @Column()

     token:string
     @Column()
      expirateDate:Date
  }