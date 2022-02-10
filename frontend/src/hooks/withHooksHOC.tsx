import { useServices } from "./useServices"

export const withHooksHOC = ( Component: any ) => {
    return ( props: any ) => {
        const services = useServices()

        return <Component { ...props } services={ services } />
    }
}
