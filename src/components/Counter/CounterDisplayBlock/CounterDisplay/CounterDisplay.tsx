import s from './CounterDisplay.module.css'

type CounterDisplayProps = {
    value: number | string
    maxValue: string
    titleValue: string
    isError: boolean
    isValid: boolean
}

export const CounterDisplay = ({
                                   value,
                                   maxValue,
                                   titleValue,
                                   isError,
                                   isValid,
                                   ...restProps
                               }: CounterDisplayProps) => {
    const resultClass = isError ? `${s.totalCount} ${s.errorCount}` : isValid ? `${s.totalCount} ${s.validCount}` : value === +maxValue ? `${s.totalCount} ${s.limitCount}` : s.totalCount;
    return (
        <div className={s.borderTotalCount}>
            <div className={resultClass}>
                <h3>{value}</h3>
                <p>{titleValue}</p>
            </div>
        </div>
    )
};