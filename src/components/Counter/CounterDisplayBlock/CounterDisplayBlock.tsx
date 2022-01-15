import s from "./CounterDisplayBlock.module.css";
import {CounterDisplay} from "./CounterDisplay/CounterDisplay";
import Button from "./Button/Button";
import React from "react";
import {CounterPropsType} from "../Counter";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSlidersH} from "@fortawesome/free-solid-svg-icons";

export type CounterDisplayBlockPropsType = CounterPropsType

export const CounterDisplayBlock = ({
                                        value,
                                        maxValue,
                                        incrementValue,
                                        isIncDisabled,
                                        isResetDisabled,
                                        reset,
                                        titleValue,
                                        settingMode,
                                        errorForMaxValue,
                                        errorForStartValue,
                                        toggleSettingsBlock,
                                        isSettingMode,
                                        ...props
                                    }: CounterDisplayBlockPropsType) => {
    const finalValue = errorForMaxValue || errorForStartValue ? 'incorrect value' : settingMode ? 'inter values and press \'set\'' : value;
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
                <FontAwesomeIcon onClick={() => toggleSettingsBlock()} className={s.settingsIcon} icon={faSlidersH}/>
            </div>
        </div>
    )
};