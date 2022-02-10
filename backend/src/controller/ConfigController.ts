import Config        from '../entities/ConfigEntity'
import ConfigService from '../services/ConfigService'

/**
 * routes based on https://laravel.com/docs/8.x/controllers#actions-handled-by-resource-controller
 */

export default class ConfigController {

    // GET /config
    public static async index( req: any, res: any, next: any )
    {

        try {
            const config: Config = await ConfigService.get()

            res.send( 200, config )

            return next()
        }
        catch ( error ) {
            res.send( 500, error )
        }

    }

    // PUT /config
    public static async update( req: any, res: any, next: any )
    {
        try {

            await ConfigService.update( req.body )
            res.send( 204 )

        }
        catch ( error ) {
            res.send( 500, error )
        }

    }

}
