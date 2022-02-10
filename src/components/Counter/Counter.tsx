import React from "react";
import s from "./Counter.module.css";
import {CounterDisplayBlock} from "./CounterDisplayBlock/CounterDisplayBlock";
import {CounterSettingsBlock} from "./CounterSettingsBlock/CounterSettingsBlock";
import {CSSTransition} from "react-transition-group";


export type CounterPropsType = {
    valueForDisplay: number
    maxValue: string
    setMaxValue: (maxValue: string) => void
    startValue: string
    setStartValue: (startValue: string) => void
    errorForMaxValue: string
    setErrorForMaxValue: (errorForMaxValue: string) => void
    errorForStartValue: string
    setErrorForStartValue: (errorForStartValue: string) => void
    checkValidationForStartValue: (maxValue: string, startValue: string) => void
    checkValidationForMaxValue: (maxValue: string, startValue: string) => void
    incrementValue: () => void
    reset: () => void
    set: () => void
    isIncDisabled: boolean
    isResetDisabled: boolean
    isSetDisabled: boolean
    isSettingModeOpen: boolean
    toggleSettingsBlock: () => void
    inChangingValuesProcess: boolean
    setInChangingValuesProcess: (settingMode: boolean) => void
    titleValue: string
}

export const Counter = ({
                            valueForDisplay,
                            maxValue,
                            setMaxValue,
                            startValue,
                            setStartValue,
                            errorForMaxValue,
                            setErrorForMaxValue,
                            errorForStartValue,
                            setErrorForStartValue,
                            checkValidationForStartValue,
                            checkValidationForMaxValue,
                            incrementValue,
                            reset,
                            set,
                            isIncDisabled,
                            isResetDisabled,
                            isSetDisabled,
                            isSettingModeOpen,
                            toggleSettingsBlock,
                            inChangingValuesProcess,
                            setInChangingValuesProcess,
                            titleValue, ...props
                        }: CounterPropsType) => {

    return (
        <div className={s.wrapper}>
            <CSSTransition in={isSettingModeOpen}
                           classNames={s}
                           timeout={500}
                           unmountOnExit
                           mountOnEnter>
                <CounterSettingsBlock startValue={startValue}
                                      setStartValue={setStartValue}
                                      maxValue={maxValue}
                                      setMaxValue={setMaxValue}
                                      errorForMaxValue={errorForMaxValue}
                                      errorForStartValue={errorForStartValue}
                                      checkValidationForStartValue={checkValidationForStartValue}
                                      checkValidationForMaxValue={checkValidationForMaxValue}
                                      setInChangingValuesProcess={setInChangingValuesProcess}
                                      set={set}
                                      isSetDisabled={isSetDisabled}
                />
            </CSSTransition>
            <CounterDisplayBlock valueForDisplay={valueForDisplay}
                                 maxValue={maxValue}
                                 incrementValue={incrementValue}
                                 isIncDisabled={isIncDisabled}
                                 isResetDisabled={isResetDisabled}
                                 reset={reset}
                                 titleValue={titleValue}
                                 inChangingValuesProcess={inChangingValuesProcess}
                                 errorForMaxValue={errorForMaxValue}
                                 errorForStartValue={errorForStartValue}
                                 toggleSettingsBlock={toggleSettingsBlock}/>
        </div>
    );
};
