import React from "react";
import style from "./Counter.module.css";
import {CounterDisplayBlock} from "./CounterDisplayBlock/CounterDisplayBlock";
import {CounterSettingsBlock} from "./CounterSettingsBlock/CounterSettingsBlock";
import {CSSTransition} from "react-transition-group";


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
    settingMode: boolean
    setSettingMode: (settingMode: boolean) => void
    set: () => void
    isSetDisabled: () => boolean | undefined
    toggleSettingsBlock: () => void
    isSettingMode: boolean
    isDisplayMode: boolean
}

export const Counter = (props: CounterPropsType) => {

    return (
        <div className={style.wrapper}>
            <CSSTransition in={props.isSettingMode}
                           classNames={style}
                           timeout={600}
                           unmountOnExit
                           mountOnEnter>
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
            </CSSTransition>
            <CSSTransition in={props.isDisplayMode}
                           classNames={style}
                           timeout={600}
                           unmountOnExit
                           mountOnEnter>
                <CounterDisplayBlock {...props}/>
            </CSSTransition>
        </div>
    );
};
