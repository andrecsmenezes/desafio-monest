export interface IService {
    id            : number,
    title         : string,
    monthlyPrice  : number,
    annuallyPrice : number,
    features      : string[],
    bestPlan      : boolean,
}
