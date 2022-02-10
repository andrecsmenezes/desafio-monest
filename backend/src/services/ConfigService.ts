import {
    UpdateResult,
    getRepository,
} from "typeorm"

import Config from "../entities/ConfigEntity"

export default class ConfigService {

    public static async get(): Promise<Config> {
        return await getRepository( Config )
                        .createQueryBuilder( 'config' )
                        .orderBy( 'config.id', 'DESC' )
                        .getOne()
    }

    public static async update( config: Config ): Promise<UpdateResult> {
        return await getRepository( Config )
                        .createQueryBuilder( 'config' )
                        .update()
                        .set({
                            annualDiscount: config.annualDiscount,
                        })
                        .where( 'config.id = 1' )
                        .execute()
    }

}
