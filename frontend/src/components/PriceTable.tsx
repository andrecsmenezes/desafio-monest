import { Component, ReactNode } from 'react'
import PriceTableItem, { IPriceTableItemProps } from './PriceTableItem'
import { withHooksHOC } from '../hooks/withHooksHOC'

interface IPriceTable {
    items: IPriceTableItemProps[]
}

class PriceTable extends Component<IPriceTable> {
    constructor( props: IPriceTable ) {
        super( props )
    }

    render(): ReactNode {
        const { items } = this.props

        return (
            <div className="grid w-full grid-cols-3">
                {
                    items?.map( ( item: IPriceTableItemProps, index: number ) => <PriceTableItem
                                                                                    key={ index }
                                                                                    title={ item.title }
                                                                                    monthlyPrice={ item.monthlyPrice }
                                                                                    annuallyPrice={ item.annuallyPrice }
                                                                                    features={ item.features }
                                                                                    bestPlan={ item.bestPlan } />
                            )
                }
            </div>
        )
    }
}

export default withHooksHOC( PriceTable )
