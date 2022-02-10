import s from "../CounterDisplayBlock/CounterDisplayBlock.module.css";
import style from './CounterSettingsBlock.module.css'
import React, {useEffect} from "react";
import Input from "./Input/Input";
import Button from "../CounterDisplayBlock/Button/Button";

export type CounterSettingsBlockPropsType = {
    maxValue: string
    setMaxValue: (maxValue: string) => void
    startValue: string
    setStartValue: (startValue: string) => void
    errorForMaxValue: string
    errorForStartValue: string
    checkValidationForStartValue: (maxValue: string, startValue: string) => void
    checkValidationForMaxValue: (maxValue: string, startValue: string) => void
    setInChangingValuesProcess: (settingMode: boolean) => void
    set: () => void
    isSetDisabled: boolean
}

export const CounterSettingsBlock = ({
                                         maxValue,
                                         setMaxValue,
                                         errorForMaxValue,
                                         startValue,
                                         setStartValue,
                                         errorForStartValue,
                                         checkValidationForStartValue,
                                         checkValidationForMaxValue,
                                         setInChangingValuesProcess,
                                         set,
                                         isSetDisabled,
                                         ...props
                                     }: CounterSettingsBlockPropsType) => {

    useEffect(() => {
        setInChangingValuesProcess(true)
        checkValidationForMaxValue(maxValue, startValue)
        checkValidationForStartValue(maxValue, startValue)
    }, [maxValue, startValue])

    return (
        <>
            <div className={`${s.counterWrapper} ${s.settings}`}>
                <div className={style.input}>
                    <div className={style.title}>
                        max value
                    </div>
                    <Input value={maxValue}
                           onChangeText={setMaxValue}
                           onEnter={() => {
                           }}
                           error={errorForMaxValue}/>
                </div>
                <div className={style.input}>
                    <div className={style.title}>
                        start value
                    </div>
                    <Input value={startValue}
                           onChangeText={setStartValue}
                           onEnter={() => {
                           }}
                           error={errorForStartValue}/>
                </div>
                <div className={style.buttonBlock}>
                    <Button callback={set} isDisabled={isSetDisabled}>
                        {'set'}
                    </Button>
                </div>
            </div>
        </>

    )
};