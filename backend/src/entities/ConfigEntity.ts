import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm"

interface IConfig {
    id?             : number,
    annualDiscount? : number,
}

@Entity()
export default class Config {

    @PrimaryGeneratedColumn()
    id?: number

    @Column( 'int' )
    annualDiscount?: number

    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP(6)' })
    createdAt?: Date

    @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP(6)', onUpdate: 'CURRENT_TIMESTAMP(6)' })
    updatedAt?: Date

    constructor( data?: IConfig ){

        if( data ) {
            if( data.id             ) this.id             = data.id
            if( data.annualDiscount ) this.annualDiscount = data.annualDiscount
        }

    }
}
