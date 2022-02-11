import React from 'react'
import Title from './components/Title'
import Subtitle from './components/Subtitle'
import Period from './components/Period'
import PriceTable from './components/PriceTable'
import { IPriceTableItemProps } from './components/PriceTableItem'
import api from './config/api'

class App extends React.Component {
    state = {
        items          : [] as IPriceTableItemProps[],
        annualDiscount : 0,
        period         : 0
    }

    handlePeriod = ( period: number ) => {
        this.setState( { period } )
    }

    componentDidMount(): void {
        api
            .get( '/services' )
            .then( response => {
                this.setState({ items: response.data })
            })
            .catch( error => {
                console.error( error )
            })

        api
            .get( '/config' )
            .then( response => {
                this.setState({ annualDiscount: response.data.annualDiscount })
            })
            .catch( error => {
                console.error( error )
            })
    }

    render(): React.ReactNode {
        return (
            <div className='p-5'>
                <div>
                    <Title value='Pricing' />
                    <Subtitle value='Try it now for Free' />
                </div>
                <div className='flex justify-center pt-5 pb-5 mb-10'>
                    <Period
                        handlePeriod={ ( period ) => this.handlePeriod( period ) }
                        annualDiscount={ this.state.annualDiscount } />
                </div>
                <div>
                    <PriceTable
                        items={ this.state.items }
                        period={ this.state.period }
                        annualDiscount={ this.state.annualDiscount } />
                </div>
            </div>
        )
    }
}

export default App
