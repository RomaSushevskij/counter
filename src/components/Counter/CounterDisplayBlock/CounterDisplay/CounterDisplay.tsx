import s from './CounterDisplay.module.css'

type CounterDisplayProps = {
    value: number | string
    maxValue: string
    titleValue: string
    isError:boolean
}

export const CounterDisplay = ({
                                   value,
                                   maxValue,
                                   titleValue,
                                   isError,
                                   ...restProps
                               }: CounterDisplayProps) => {
    return (
        <div className={s.borderTotalCount}>
            <div className={value === +maxValue || isError ? `${s.totalCount} ${s.limitCount}` : s.totalCount}>
                <h3>{value}</h3>
                <p>{titleValue}</p>
            </div>
        </div>
    )
};