import { IService } from '../entities/ServiceEntity'
import Service from "../entities/ServiceEntity"

export default class ServiceFactory {

    public static async hydrate( data: IService ): Promise<Service> {
        const service: Service = new Service()

        service.order         = data.order
        service.title         = data.title
        service.monthlyPrice  = data.monthlyPrice
        service.annuallyPrice = data.annuallyPrice
        service.features      = data.features
        service.bestPlan      = data.bestPlan

        return service
    }

}
