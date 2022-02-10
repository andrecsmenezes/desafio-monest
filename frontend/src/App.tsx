import React from 'react'
import Title from './components/Title'
import Subtitle from './components/Subtitle'
import Period from './components/Period'
import PriceTable from './components/PriceTable'
import { IPriceTableItemProps } from './components/PriceTableItem'
import api from './config/api'

class App extends React.Component {
    render(): React.ReactNode {
        api
            .get( '/services' )
            .then( response => {
                console.log( response )
            })
            .catch( error => {
                console.error( error )
            })

        return (
            <div className='p-5'>
                <div>
                    <Title value='Pricing' />
                    <Subtitle value='Try it now for Free' />
                </div>
                <div className='flex justify-center pt-5 pb-5 mb-10'>
                    <Period />
                </div>
                <div>
                    <PriceTable items={ [] as IPriceTableItemProps[] } />
                </div>
            </div>
        )
    }
}

export default App
