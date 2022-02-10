import { Connection } from 'typeorm'
import { Factory, Seeder } from 'typeorm-seeding'
import Config from '../entities/ConfigEntity'

export default class ServiceSeed implements Seeder {

    public async run( factory: Factory, connection: Connection ): Promise<any> {
        await connection
            .createQueryBuilder()
            .insert()
            .into( Config )
            .values([{ annualDiscount: 15 }])
            .execute()
    }

}
