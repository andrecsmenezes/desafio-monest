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
                    monthlyPrice  : 0,
                    annuallyPrice : 0,
                    bestPlan      : 0,

                    features: JSON.stringify([
                        '2 repositories',
                        '5 members',
                        '10 GB storage'
                    ])
                },

                {
                    order         : 2,
                    title         : 'Plus',
                    monthlyPrice  : 999,
                    annuallyPrice : 11988,
                    bestPlan      : 1,

                    features: JSON.stringify([
                        '10 repositories',
                        '15 members',
                        '50 GB storage'
                    ])
                },

                {
                    order         : 3,
                    title         : 'Pro',
                    monthlyPrice  : 4999,
                    annuallyPrice : 59988,
                    bestPlan      : 0,

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
