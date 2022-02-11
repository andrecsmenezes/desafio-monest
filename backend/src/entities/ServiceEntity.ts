import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, BaseEntity } from "typeorm"

export interface IService {
    id?            : number,
    order?         : number,
    title?         : string,
    monthlyPrice?  : number,
    annuallyPrice? : number,
    features?      : string,
    bestPlan?      : number,
}

@Entity()
export default class Service {

    @PrimaryGeneratedColumn()
    id!: number

    @Column( 'int' )
    order!: number

    @Column({ type: 'varchar', length: 100 })
    title!: string

    @Column( 'int' )
    monthlyPrice!: number

    @Column( 'int' )
    annuallyPrice!: number

    @Column( 'json' )
    features!: string

    @Column( 'tinyint' )
    bestPlan!: number

    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP(6)' })
    createdAt!: Date

    @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP(6)', onUpdate: 'CURRENT_TIMESTAMP(6)' })
    updatedAt!: Date

    constructor( data?: IService ){

        if( data ) {
            if( data.id            ) this.id            = data.id
            if( data.title         ) this.title         = data.title
            if( data.monthlyPrice  ) this.monthlyPrice  = data.monthlyPrice
            if( data.annuallyPrice ) this.annuallyPrice = data.annuallyPrice
            if( data.features      ) this.features      = data.features
            if( data.bestPlan      ) this.bestPlan      = data.bestPlan
        }

    }

}
