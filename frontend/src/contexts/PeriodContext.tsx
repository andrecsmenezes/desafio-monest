import React from 'react'

export enum EPeriod {
    MONTHLY,
    ANNUALLY
}

export interface IPeriodContext {
    period: EPeriod
    annuallyDiscount: number,

    setPeriod?: ( period: EPeriod ) => void
    setAnnuallyDiscount?: ( discount: number ) => void
}

const PeriodContext = React.createContext<IPeriodContext | null >({
    period: EPeriod.MONTHLY,
    annuallyDiscount: 0,

    setPeriod: ( period ) => {},
    setAnnuallyDiscount: ( discount ) => {}
})

export default PeriodContext
