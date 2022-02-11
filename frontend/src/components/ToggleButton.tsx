import { Component, ReactNode, ChangeEvent } from 'react'
import './ToggleButton/ToggleButton.scss'

interface IToggleButtonState {
    checked : boolean
}

interface IToggleButtonProps {
    handleIsActive : ( checked: boolean ) => void
}

class ToggleButton extends Component<IToggleButtonProps, IToggleButtonState> {

    constructor( props: IToggleButtonProps ) {
        super( props )

        this.state = {
            checked: false
        }
    }

    handleChange( event: ChangeEvent<HTMLInputElement> ) {
        this.setState( { checked: event.target.checked } )
        this.props.handleIsActive( event.target.checked )
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
                            onChange={ ( event ) => this.handleChange( event ) }
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
