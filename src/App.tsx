import React, {useState} from 'react';
import logo from './logo.svg';
import './App.module.css';
import {CounterDisplay} from "./components/Counter/CounterDisplayBlock/CounterDisplay/CounterDisplay";
import s from "./App.module.css";
import Button from "./components/Counter/CounterDisplayBlock/Button/Button";
import {Counter} from "./components/Counter/Counter";

function App() {
    const [value, setValue] = useState<number>(0);
    const [maxValue, setMaxValue] = useState<number>(5);

    const incrementValue = () => {
        setValue(value + 1)
    };
    const reset = () => {
        setValue(0)
    };
    const isIncDisabled = () => {
        return value === maxValue
    };
    const isResetDisabled = () => {
        return value < 1
    };
    return (
        <Counter value={value}
                 maxValue={maxValue}
                 incrementValue={incrementValue}
                 isIncDisabled={isIncDisabled}
                 reset={reset}
                 isResetDisabled={isResetDisabled}
                 titleValue='title'/>

    )
}

export default App;
