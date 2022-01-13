import s from './CounterDisplay.module.css'

type CounterDisplayProps = {
    value:number
    maxValue:number
    titleValue:string
}

export const CounterDisplay = ({value, maxValue,titleValue, ...restProps}:CounterDisplayProps) => {
    return (
        <div className={s.borderTotalCount}>
            <div className={value >= maxValue ? `${s.totalCount} ${s.limitCount}` : s.totalCount}>
                <h3>{value}</h3>
                <p>{titleValue}</p>
            </div>
        </div>
    )
};