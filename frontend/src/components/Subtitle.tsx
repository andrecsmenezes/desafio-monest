import { Component, ReactNode } from 'react'

type SubtitleState = {
    value: string
}

class Subtitle extends Component<SubtitleState> {
    render(): ReactNode {
        const { value } = this.props

        return <h1 className='text-4xl'>{ value }</h1>
    }
}

export default Subtitle
