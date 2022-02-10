import { Component, ReactNode, ChangeEvent, Context } from 'react'
import PeriodContext, { EPeriod } from '../contexts/PeriodContext'
import './ToggleButton/ToggleButton.scss'

interface IToggleButtonProps {}

interface IToggleButtonState {
    checked?: boolean
}

class ToggleButton extends Component<IToggleButtonProps, IToggleButtonState> {

    static contextType = PeriodContext

    constructor( props: IToggleButtonProps ) {
        super( props )

        this.state = {
            checked: false
        }

        this.handleChange = this.handleChange.bind( this )
    }

    handleChange( event: ChangeEvent<HTMLInputElement> ) {
        this.setState( { checked: event.target.checked } )
        this.context.setPeriod( event.target.checked ? EPeriod.ANNUALLY : EPeriod.MONTHLY )
    }

    render(): ReactNode {
        return (
            <div className="inline-block p-5">
                <label className="flex items-center cursor-pointer">
                    <div className="relative">
                        <input
                            type="checkbox"
                            className="sr-only"
                            checked={ this.state.checked }
                            placeholder='Toggle'
                            onChange={ this.handleChange }
                        />

                        <div className="block h-8 bg-gray-600 rounded-full w-14"></div>
                        <div className="absolute w-6 h-6 transition bg-white rounded-full dot left-1 top-1"></div>
                    </div>
                </label>
            </div>
        )
    }
}

export default ToggleButton
