import { Component, ReactNode } from 'react'
import ToggleButton from './ToggleButton'

interface IPeriodState {
    checked: boolean
}

interface IPeriodProps {
    handlePeriod   : ( period: number ) => void
    annualDiscount : number
}

class Period extends Component<IPeriodProps, IPeriodState> {
    constructor( props: IPeriodProps ) {
        super( props )

        this.state = {
            checked: false
        }
    }

    handleIsActive( checked: boolean ) {
        this.setState( { checked } )
        this.props.handlePeriod( checked ? 1 : 0 )
    }

    render(): ReactNode {
        const { checked } = this.state

        let annualDiscountPercent

        if( checked ) {
            annualDiscountPercent = <div className='absolute left-0 w-full text-sm text-center text-red-800 -bottom-5'>
                                        { this.props.annualDiscount }% discount
                                    </div>
        }

        return (
            <div className='flex items-center'>
                <span className='text-4xl'>Montly</span>
                <ToggleButton handleIsActive={ ( checked ) => this.handleIsActive( checked ) } />
                <span className='relative text-4xl'>
                    Annually

                    { annualDiscountPercent }
                </span>
            </div>
        )
    }
}

export default Period
