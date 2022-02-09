import React, {useEffect, useState} from 'react';
import './App.module.css';
import {Counter} from "./components/Counter/Counter";

function App() {
    //value on display
    const [value, setValue] = useState<number>(0)
    //max value from input
    const [maxValue, setMaxValue] = useState<string>('0')
    //start value from input
    const [startValue, setStartValue] = useState<string>('0')
    //is values changing in input now?
    const [inChangingValuesProcess, setInChangingValuesProcess] = useState<boolean>(true)
    //is setting mode open now
    const [isSettingModeOpen, setIsSettingModeOpen] = useState<boolean>(false)

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
        Number(maxValue) < 0 ? 'Max value should be positive' :
            Number(maxValue) <= Number(startValue) ?
                'Max value should be greater than start' : '';
    const errorForStartValue = !startValue ? 'Field required' :
        Number(startValue) < 0 ? 'Start value should be positive' :
            Number(maxValue) <= Number(startValue) ? 'Start value should be less than max' : '';


    const incrementValue = () => {
        setValue(Number(value) + 1)
    };
    const reset = () => {
        setValue(Number(startValue))
    };
    const isIncDisabled = () => {
        return value === Number(maxValue) || inChangingValuesProcess
    };
    const isResetDisabled = () => {
        return value === Number(startValue) || inChangingValuesProcess
    };
    const set = () => {
        setInChangingValuesProcess(false);
        setValue(Number(startValue));
    };
    const isSetDisabled = () => {
        return !!(!inChangingValuesProcess || errorForMaxValue || errorForStartValue)
    };
    const toggleSettingsBlock = () => {
        setIsSettingModeOpen(!isSettingModeOpen)
    };
    return (
        <Counter value={value}
                 maxValue={maxValue}
                 setMaxValue={setMaxValue}
                 startValue={startValue}
                 setStartValue={setStartValue}
                 errorForMaxValue={errorForMaxValue}
                 errorForStartValue={errorForStartValue}
                 incrementValue={incrementValue}
                 isIncDisabled={isIncDisabled}
                 isResetDisabled={isResetDisabled}
                 isSetDisabled={isSetDisabled}
                 reset={reset}
                 inChangingValuesProcess={inChangingValuesProcess}
                 setInChangingValuesProcess={setInChangingValuesProcess}
                 set={set}
                 toggleSettingsBlock={toggleSettingsBlock}
                 isSettingModeOpen={isSettingModeOpen}
                 titleValue='title'
        />
    )
}

export default App;
