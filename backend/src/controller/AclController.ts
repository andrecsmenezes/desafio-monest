export default class AclController {

    public static async status( req: any, res: any, next: any ): Promise<any> {
        res.send( 200, { status: 'OK' })
        return next()
    }

}
