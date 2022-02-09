import {CounterDisplayBlock} from "../CounterDisplayBlock/CounterDisplayBlock";
import s from "../CounterDisplayBlock/CounterDisplayBlock.module.css";
import style from './CounterSettingsBlock.module.css'
import React, {MouseEvent, useState} from "react";
import Input from "./Input/Input";
import Button from "../CounterDisplayBlock/Button/Button";

export type CounterSettingsBlockPropsType = {
    maxValue: string
    setMaxValue: (maxValue: string) => void
    errorForMaxValue: string
    startValue: string
    setStartValue: (startValue: string) => void
    errorForStartValue: string
    setInChangingValuesProcess:(settingMode:boolean) => void
    set:() => void
    isSetDisabled:() => boolean | undefined
}

export const CounterSettingsBlock = ({
                                         maxValue,
                                         setMaxValue,
                                         errorForMaxValue,
                                         startValue,
                                         setStartValue,
                                         errorForStartValue,
                                         setInChangingValuesProcess,
                                         set,
                                         isSetDisabled,
                                         ...props
                                     }: CounterSettingsBlockPropsType) => {

    return (
        <>
            <div className={`${s.counterWrapper} ${s.settings}`}>
                <div className={style.input}>
                    <div className={style.title}>
                        max value
                    </div>
                    <Input value={maxValue}
                           setInChangingValuesProcess={setInChangingValuesProcess}
                           onChangeText={setMaxValue}
                           onEnter={() => {
                           }}
                           error={errorForMaxValue}/>
                </div>
                <div className={style.input}>
                    <div className={style.title}>
                        start value
                    </div>
                    <Input value={Number(startValue)}
                           setInChangingValuesProcess={setInChangingValuesProcess}
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