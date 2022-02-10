import s from "./CounterDisplayBlock.module.css";
import {CounterDisplay} from "./CounterDisplay/CounterDisplay";
import Button from "./Button/Button";
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSlidersH} from "@fortawesome/free-solid-svg-icons";

export type CounterDisplayBlockPropsType = {
    valueForDisplay: number
    maxValue: string
    incrementValue: () => void
    isIncDisabled: boolean
    isResetDisabled: boolean
    reset: () => void
    titleValue: string
    inChangingValuesProcess: boolean
    errorForMaxValue: string
    errorForStartValue: string
    toggleSettingsBlock: () => void
}

export const CounterDisplayBlock = ({
                                        valueForDisplay,
                                        maxValue,
                                        incrementValue,
                                        isIncDisabled,
                                        isResetDisabled,
                                        reset,
                                        titleValue,
                                        inChangingValuesProcess,
                                        errorForMaxValue,
                                        errorForStartValue,
                                        toggleSettingsBlock,
                                        ...props
                                    }: CounterDisplayBlockPropsType) => {
    const finalValue = errorForMaxValue || errorForStartValue ? 'incorrect value' : inChangingValuesProcess ? 'inter values and press \'set\'' : valueForDisplay;
    const isError = !!(errorForMaxValue || errorForStartValue);
    const isValid = finalValue === 'inter values and press \'set\'';
    return (
        <div className={s.counterWrapper}>
            <div className={s.displayBlock}>
                <CounterDisplay isValid={isValid} isError={isError} value={finalValue} maxValue={maxValue}
                                titleValue={titleValue}/>
            </div>
            <div className={s.buttonsBlock}>
                <Button callback={incrementValue} isDisabled={isIncDisabled}>
                    {'inc'}
                </Button>
                <Button red callback={reset} isDisabled={isResetDisabled}>
                    {'reset'}
                </Button>
            </div>
            <div className={s.settingsBlock}>
                <FontAwesomeIcon onClick={toggleSettingsBlock} className={s.settingsIcon} icon={faSlidersH}/>
            </div>
        </div>
    )
};