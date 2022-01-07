import React, {useState} from 'react';
import logo from './logo.svg';
import './App.module.css';
import {CounterDisplay} from "./components/CounterDisplay/CounterDisplay";
import s from "./App.module.css";
import Button from "./components/Button/Button";

function App() {
    const [count, setCount] = useState<number>(0);
    const [limitCount, setLimitCount] = useState<number>(5);

    const incrementCount = () => {
        setCount(count + 1)
    };
    const reset = () => {
        setCount(0)
    };
    const isIncDisabled = () => {
        return count === limitCount
    };
    const isResetDisabled = () => {
        return count < 1
    };

    return (
        <div className={s.counterWrapper}>
            <div className={s.displayBlock}>
                <CounterDisplay count={count} limitCount={limitCount} titleCount={'title'}/>
            </div>
            <div className={s.buttonsBlock}>
                <Button callback={incrementCount} isDisabled={isIncDisabled}>
                    {'inc'}
                </Button>
                <Button red callback={reset} isDisabled={isResetDisabled}>
                    {'reset'}
                </Button>
            </div>
        </div>
    );
}

export default App;
