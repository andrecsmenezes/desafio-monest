import Service        from '../entities/ServiceEntity'
import ServiceService from '../services/ServiceService'

/**
 * routes based on https://laravel.com/docs/8.x/controllers#actions-handled-by-resource-controller
 */

export default class ServiceController {

    // GET /services
    public static async index( req: any, res: any, next: any )
    {

        try {
            const services: Service[] = await ServiceService.getAll()

            res.send( 200, services )

            return next()
        }
        catch ( error ) {
            res.send( 500, error )
        }

    }

    // POST /services
    public static async store( req: any, res: any, next: any )
    {
        try {
            const result = await ServiceService.store( req.body )

            res.send( 201, result )

            return next()
        }
        catch ( error ) {
            res.send( 500, error )
        }
    }

    // GET /services/:id
    public static async show( req: any, res: any, next: any )
    {

        try {
            const service: Service = await ServiceService.getById( req.params.id )

            res.send( 200, service )

            return next()
        }
        catch ( error ) {
            res.send( 500, error )
        }

    }

    // PUT|PATCH /services/:id
    public static async update( req: any, res: any, next: any )
    {
        try {

            await ServiceService.update( req.params.id, req.body, req.method.toUpperCase() === 'PATCH' )
            res.send( 204 )

        }
        catch ( error ) {
            res.send( 500, error )
        }

    }

    // DELETE /services/:id
    public static async destroy( req: any, res: any, next: any )
    {

        try {
            await ServiceService.destroy( req.params.id )

            res.send( 200 )

            return next()
        }
        catch ( error ) {
            res.send( 500, error )
        }

    }

}
