import React, {MouseEvent, useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.module.css';
import {CounterDisplay} from "./components/Counter/CounterDisplayBlock/CounterDisplay/CounterDisplay";
import s from "./App.module.css";
import Button from "./components/Counter/CounterDisplayBlock/Button/Button";
import {Counter} from "./components/Counter/Counter";

function App() {
    const [value, setValue] = useState<number | string>(0);

    const [maxValue, setMaxValue] = useState<string>('0');

    const [startValue, setStartValue] = useState<string>('0');

    useEffect(() => {
        const valueAsString = localStorage.getItem("value");
        valueAsString && setValue(JSON.parse(valueAsString));
        const maxValueFromLStorage = localStorage.getItem("maxValue");
        maxValueFromLStorage && setMaxValue(maxValueFromLStorage);
        const startValueFromLStorage = localStorage.getItem("startValue");
        startValueFromLStorage && setStartValue(startValueFromLStorage)

    }, []);
    useEffect(() => {
        localStorage.setItem("value", JSON.stringify(value))
    }, [value])
    useEffect(() => {
        localStorage.setItem("startValue", startValue);
    }, [startValue]);
    useEffect(() => {
        localStorage.setItem("maxValue", maxValue)
    }, [maxValue]);

    const errorForMaxValue = !maxValue ? 'Field required' :
        +maxValue < 0 ? 'Max value should be positive' :
            +maxValue <= +startValue ?
                'Max value should be greater than start' : '';
    const errorForStartValue = !startValue ? 'Field required' :
        +startValue < 0 ? 'Start value should be positive' :
            +maxValue <= +startValue ? 'Start value should be less than max' : '';

    const [settingMode, setSettingMode] = useState<boolean>(true);
    const [isSettingMode, setIsSettingMode] = useState<boolean>(true);
    const [isDisplayMode, setIsDisplayMode] = useState<boolean>(false);

    const incrementValue = () => {
        setValue(+value + 1)
    };
    const reset = () => {
        setValue(+startValue)
    };
    const isIncDisabled = () => {
        return value === +maxValue || settingMode
    };
    const isResetDisabled = () => {
        return value === +startValue || settingMode
    };
    const set = () => {
        setSettingMode(false);
        setValue(+startValue);
        setIsSettingMode(false);
        setIsDisplayMode(true);
    };
    const isSetDisabled = () => {
        return !!(errorForMaxValue || errorForStartValue)
    };
    const toggleSettingsBlock = () => {
        setIsSettingMode(true);
        setIsDisplayMode(false);
    };
    return (
        <Counter value={value}
                 maxValue={maxValue}
                 setMaxValue={setMaxValue}
                 errorForMaxValue={errorForMaxValue}
                 startValue={startValue}
                 setStartValue={setStartValue}
                 errorForStartValue={errorForStartValue}
                 incrementValue={incrementValue}
                 isIncDisabled={isIncDisabled}
                 reset={reset}
                 isResetDisabled={isResetDisabled}
                 titleValue='title'
                 settingMode={settingMode}
                 setSettingMode={setSettingMode}
                 set={set}
                 isSetDisabled={isSetDisabled}
                 toggleSettingsBlock={toggleSettingsBlock}
                 isSettingMode={isSettingMode}
                 isDisplayMode={isDisplayMode}
        />
    )
}

export default App;
