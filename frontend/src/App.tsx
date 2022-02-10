import React from 'react'
import Title from './components/Title'
import Subtitle from './components/Subtitle'
import Period from './components/Period'
import PriceTable from './components/PriceTable'
import { IPriceTableItemProps } from './components/PriceTableItem'
import api from './config/api'

const sample: IPriceTableItemProps[] = [
  {
    title: 'Free',
    monthlyPrice: 0,
    annuallyPrice: 0,
    features: [
      '2 repositories',
      '5 members',
      '10 Gb storage',
    ],
    bestPlan: false,
  },

  {
    title: 'Plus',
    monthlyPrice: 999,
    annuallyPrice: 11988,
    features: [
      '10 repositories',
      '15 members',
      '50 Gb storage',
      '24/7 support',
    ],
    bestPlan: true,
  },

  {
    title: 'Pro',
    monthlyPrice: 4999,
    annuallyPrice: 59988,
    features: [
      'Unlimited repositories',
      'Unlimited members',
      '1 Tb storage',
      '24/7 storage',
    ],
    bestPlan: false,
  },
]

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
                    <PriceTable items={ sample } />
                </div>
            </div>
        )
    }
}

export default App
