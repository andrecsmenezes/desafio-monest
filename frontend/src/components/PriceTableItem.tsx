import { Component, ReactNode } from 'react'
import './PriceTableItem/PriceTableItem.scss'

export interface IPriceTableItemProps {
    id             ?: number,
    title          ?: string,
    monthlyPrice   ?: number,
    annuallyPrice  ?: number,
    features       ?: string[],
    bestPlan       ?: boolean,
    period         ?: number,
    annualDiscount ?: number
}

class PriceTableItem extends Component<IPriceTableItemProps> {

    constructor( props: IPriceTableItemProps ) {
        super( props )
    }

    render(): ReactNode {
        const { title, monthlyPrice, annuallyPrice, features, bestPlan, period, annualDiscount } = this.props

        const selectedPrice = period        === 1 ? annuallyPrice : monthlyPrice
        const price         = selectedPrice === 0 ? selectedPrice : ( selectedPrice || NaN ) / 100

        let annualDiscountPrice

        if(
            period === 1
            && annualDiscount
            && annualDiscount > 0
        ) {
            const discount = ( price * ( 1 - ( 1 / annualDiscount ) ) )

            if( price > discount ) {
                annualDiscountPrice = <div className='text-blue-800'>
                                            {
                                                ( price * ( 1 - ( 1 / annualDiscount ) ) )
                                                    .toLocaleString( 'pt-BR', { style: 'currency', currency: 'BRL' } )
                                            }
                                        </div>
            }
        }

        return (
            <div className={ `grid relative p-10 ${ bestPlan ? 'scale-125 shadow-2xl z-10 bg-gray-200 mx-10' : 'bg-gray-50' }` }>

                <div className='text-center'>{ title }</div>

                <div className='mb-5 text-4xl font-bold text-center'>
                    <span className={ `${ annualDiscountPrice ? 'relative price-cut text-sm text-red-800' : '' }` }>
                        { price.toLocaleString( 'pt-BR', { style: 'currency', currency: 'BRL' } ) }
                    </span>
                    { annualDiscountPrice }
                </div>

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
