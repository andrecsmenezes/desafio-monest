import { Connection } from 'typeorm'
import { Factory, Seeder } from 'typeorm-seeding'
import Service from '../entities/ServiceEntity'

export default class ServiceSeed implements Seeder {

    public async run( factory: Factory, connection: Connection ): Promise<any> {
        await connection
            .createQueryBuilder()
            .insert()
            .into( Service )
            .values([

                {
                    order         : 1,
                    title         : 'Free',
                    montlyPrice   : 0,
                    annuallyPrice : 0,

                    features: JSON.stringify([
                        '2 repositories',
                        '5 members',
                        '10 GB storage'
                    ])
                },

                {
                    order         : 2,
                    title         : 'Plus',
                    montlyPrice   : 999,
                    annuallyPrice : 11988,

                    features: JSON.stringify([
                        '10 repositories',
                        '15 members',
                        '50 GB storage'
                    ])
                },

                {
                    order         : 3,
                    title         : 'Pro',
                    montlyPrice   : 4999,
                    annuallyPrice : 59988,

                    features: JSON.stringify([
                        'Unlimited repositories',
                        'Unlimited members',
                        '1 TB storage'
                    ])
                }

            ])
            .execute()
    }

}
