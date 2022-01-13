import React, {MouseEvent, useState} from "react";
import s from "./Counter.module.css";
import {CounterDisplay} from "./CounterDisplayBlock/CounterDisplay/CounterDisplay";
import Button from "./CounterDisplayBlock/Button/Button";
import {CounterDisplayBlock} from "./CounterDisplayBlock/CounterDisplayBlock";
import {CounterSettingsBlock} from "./CounterSettingsBlock/CounterSettingsBlock";

export type CounterPropsType = {
    value: number | string
    maxValue: string
    setMaxValue: (maxValue: string) => void
    errorForMaxValue: string
    startValue: string
    setStartValue: (startValue: string) => void
    errorForStartValue: string
    incrementValue: () => void
    reset: () => void
    isIncDisabled: () => boolean
    isResetDisabled: () => boolean
    titleValue: string
    settingMode:boolean
    setSettingMode:(settingMode:boolean) => void
    set:(e:MouseEvent<HTMLButtonElement>)=>void
    isSetDisabled:() => boolean | undefined
}

export const Counter = (props: CounterPropsType) => {

    return (
        <div className={s.wrapper}>
            <CounterSettingsBlock maxValue={props.maxValue}
                                  setMaxValue={props.setMaxValue}
                                  errorForMaxValue={props.errorForMaxValue}
                                  startValue={props.startValue}
                                  setStartValue={props.setStartValue}
                                  errorForStartValue={props.errorForStartValue}
                                  setSettingMode={props.setSettingMode}
                                  set={props.set}
                                  isSetDisabled={props.isSetDisabled}
                                  />

            <CounterDisplayBlock {...props}/>
        </div>
    );
};
