import { Component, ReactNode } from 'react'
import ToggleButton from './ToggleButton'

class Period extends Component {
    render(): ReactNode {
        return (
            <div className='flex items-center'>
                <span className='text-4xl'>Montly</span>
                <ToggleButton />
                <span className='text-4xl'>Annually</span>
            </div>
        )
    }
}

export default Period
