import { Component, ReactNode } from 'react'

type TitleState = {
    value: string
}

class Title extends Component<TitleState> {
    render(): ReactNode {
        const { value } = this.props

        return <h1 className='text-2xl'>{ value }</h1>
    }
}

export default Title
