import {
    DeleteResult,
    InsertResult,
    UpdateResult,
    getConnection,
    getRepository,
} from "typeorm"

import Service        from "../entities/ServiceEntity"
import ServiceFactory from "../factories/ServiceFactory"
import { IService }   from '../entities/ServiceEntity'

export default class ServiceService {

    public static async getAll(): Promise<Service[]> {
        return await getRepository( Service )
                        .createQueryBuilder( 'service' )
                        .orderBy( 'service.order', 'ASC' )
                        .getMany()
    }

    public static async getById( id: number ): Promise<Service> {
        return await getRepository( Service )
                        .createQueryBuilder( 'service' )
                        .where( 'service.id = :id', { id } )
                        .getOne()
    }

    public static async update( id: number, service: Service, partial: boolean = false /* for PATCH method */ ): Promise<UpdateResult> {
        return await getRepository( Service )
                        .createQueryBuilder( 'service' )
                        .update()
                        .set({
                            ...( ( partial && service.order         || !partial ) && { order         : service.order         } ),
                            ...( ( partial && service.title         || !partial ) && { title         : service.title         } ),
                            ...( ( partial && service.monthlyPrice  || !partial ) && { monthlyPrice  : service.monthlyPrice  } ),
                            ...( ( partial && service.annuallyPrice || !partial ) && { annuallyPrice : service.annuallyPrice } ),
                            ...( ( partial && service.features      || !partial ) && { features      : service.features      } ),
                        })
                        .where( 'service.id = :id', { id })
                        .execute()
    }

    public static async store( data: IService ): Promise<InsertResult> {
        let service: Service = await ServiceFactory.hydrate( data )

        return await getConnection()
                        .createQueryBuilder()
                        .insert()
                        .into( Service )
                        .values({
                            order         : service.order,
                            title         : service.title,
                            monthlyPrice  : service.monthlyPrice,
                            annuallyPrice : service.annuallyPrice,
                            features      : service.features
                        })
                        .execute()
    }

    public static async destroy( id: number ): Promise<DeleteResult> {
        return await getRepository( Service )
                        .createQueryBuilder( 'service' )
                        .delete()
                        .where( 'service.id = :id', { id })
                        .execute()
    }

}
