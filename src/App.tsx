import React, {MouseEvent, useState} from 'react';
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
    const errorForMaxValue = !maxValue ? 'Field required' :
        +maxValue <= +startValue ?
            'Max value should be greater than start' : '';
    const errorForStartValue = !startValue ?'Field required' :
        +maxValue <= +startValue ? 'Start value should be less than max' : '';

    const [settingMode, setSettingMode] = useState<boolean>(true);

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
    const set = (e: MouseEvent<HTMLButtonElement>) => {
        setSettingMode(false);
        setValue(+startValue);
    };
    const isSetDisabled = () => {
       return !!(!settingMode || errorForMaxValue || errorForStartValue)

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
        />

    )
}

export default App;
