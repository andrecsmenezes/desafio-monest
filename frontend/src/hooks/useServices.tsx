import { useEffect, useState } from 'react'
import { IService } from '../contexts/ServiceContext'

export function useServices(): IService[] {
    const [ services, setServices ] = useState<IService[]>([])

    useEffect( () => {
        const handler = ( event: any ) => {
            const { data } = event.data
            setServices( data )
        }

        window.addEventListener( 'serviceUpdated', handler )

        return () => {
            window.removeEventListener( 'serviceUpdated', handler )
        }
    }, [])

    return services
}
