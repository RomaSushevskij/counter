import s from './CounterDisplay.module.css'

type CounterDisplayProps = {
    count:number
    limitCount:number
    titleCount:string
}

export const CounterDisplay = ({count, limitCount,titleCount, ...restProps}:CounterDisplayProps) => {
    return (
        <div className={s.borderTotalCount}>
            <div className={count >= limitCount ? `${s.totalCount} ${s.limitCount}` : s.totalCount}>
                <h3>{count}</h3>
                <p>{titleCount}</p>
            </div>
        </div>
    )
};