import React, { Component, ReactNode } from 'react'
import PeriodContext, { EPeriod } from '../contexts/PeriodContext'

export interface IPriceTableItemProps {
    id            ?: number,
    title         ?: string,
    monthlyPrice  ?: number,
    annuallyPrice ?: number,
    features      ?: string[],
    bestPlan      ?: boolean
}

class PriceTableItem extends Component<IPriceTableItemProps> {

    static contextType = PeriodContext

    constructor( props: IPriceTableItemProps ) {
        super( props )
    }

    componentDidMount() {
        const value = this.context
    }

    render(): ReactNode {
        const { title, monthlyPrice, annuallyPrice, features, bestPlan } = this.props

        let price = NaN

        switch( this.context.period ) {
            case EPeriod.MONTHLY :
                price = monthlyPrice || 0 / 10
                break

            case EPeriod.ANNUALLY :
                price = annuallyPrice || 0 / 10
                break

            default :
                price = NaN
        }

        return (
            <div className={ `grid relative p-10 ${ bestPlan ? 'scale-125 shadow-2xl z-10 bg-gray-200 mx-10' : 'bg-gray-50' }` }>

                <div className='text-center'>{ title }</div>

                <div className='mb-5 text-4xl font-bold text-center'>{ price.toLocaleString( 'pt-BR', { style: 'currency', currency: 'BRL' } ) }</div>

                <div className='mb-5'>
                    <ul>
                        { features?.map( ( item, index ) => <li key={ index }>{ item }</li> ) }
                    </ul>
                </div>

                <div className='self-end mt-5 text-center'>
                    <a href="#" className='p-5 font-bold text-white transition-all duration-300 ease-out bg-green-500 hover:bg-green-400 hover:shadow-lg hover:-translate-y-1'>Get started</a>
                </div>

            </div>
        )
    }
}

export default PriceTableItem
