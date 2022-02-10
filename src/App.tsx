import React, {useEffect, useState} from 'react';
import './App.module.css';
import {Counter} from "./components/Counter/Counter";

export type BtnDisablingType = {
    isIncDisabled: boolean
    isResetDisabled: boolean
    isSetDisabled: boolean
}

function App() {
    //value on display
    const [valueForDisplay, setValueForDisplay] = useState<number>(0)
    //max value from input
    const [maxValue, setMaxValue] = useState<string>('0')
    //start value from input
    const [startValue, setStartValue] = useState<string>('0')
    //is setting mode open now
    const [isSettingModeOpen, setIsSettingModeOpen] = useState<boolean>(false)
    //is values changing in input now?
    const [inChangingValuesProcess, setInChangingValuesProcess] = useState<boolean>(true)
    //errors for start value
    const [errorForStartValue, setErrorForStartValue] = useState('')
    //errors for max value
    const [errorForMaxValue, setErrorForMaxValue] = useState('')
    //values of buttons disabling
    const [btnDisabling, setBtnDisabling] = useState<BtnDisablingType>({
        isIncDisabled: false,
        isResetDisabled: false,
        isSetDisabled: false
    })

    useEffect(() => {
        const valueAsString = localStorage.getItem("valueForDisplay");
        valueAsString && setValueForDisplay(JSON.parse(valueAsString));
        const maxValueFromLStorage = localStorage.getItem("maxValue");
        maxValueFromLStorage && setMaxValue(maxValueFromLStorage);
        const startValueFromLStorage = localStorage.getItem("startValue");
        startValueFromLStorage && setStartValue(startValueFromLStorage)
    }, []);

    useEffect(() => {
        localStorage.setItem("valueForDisplay", JSON.stringify(valueForDisplay))
        localStorage.setItem("startValue", startValue)
        localStorage.setItem("maxValue", maxValue)
    }, [valueForDisplay, startValue, maxValue])

    useEffect(() => {
        setBtnDisabling({
            ...btnDisabling,
            isIncDisabled: valueForDisplay === Number(maxValue) || inChangingValuesProcess,
            isResetDisabled: valueForDisplay === Number(startValue) || inChangingValuesProcess,
            isSetDisabled: !!(!inChangingValuesProcess || errorForMaxValue || errorForStartValue)
        })
    }, [valueForDisplay, startValue, maxValue, inChangingValuesProcess, errorForMaxValue, errorForStartValue])

    const incrementValue = () => {
        setValueForDisplay(Number(valueForDisplay) + 1)
    };
    const reset = () => {
        setValueForDisplay(Number(startValue))
    };
    const set = () => {
        setInChangingValuesProcess(false);
        setValueForDisplay(Number(startValue));
    };
    const toggleSettingsBlock = () => {
        setIsSettingModeOpen(!isSettingModeOpen)
    };

    const checkValidationForMaxValue = (maxValue: string, startValue: string) => {
        const textOfError = !maxValue ? 'Field required' :
            Number(maxValue) < 0 ? 'Max value should be positive' :
                Number(maxValue) <= Number(startValue) ?
                    'Max value should be greater than start' : ''
        setErrorForMaxValue(textOfError)
    }
    const checkValidationForStartValue = (maxValue: string, startValue: string) => {
        const textOfError = !startValue ? 'Field required' :
            Number(startValue) < 0 ? 'Start value should be positive' :
                Number(maxValue) <= Number(startValue) ? 'Start value should be less than max' : ''
        setErrorForStartValue(textOfError)
    }
    return (
        <Counter valueForDisplay={valueForDisplay}
                 maxValue={maxValue}
                 setMaxValue={setMaxValue}
                 startValue={startValue}
                 setStartValue={setStartValue}
                 errorForMaxValue={errorForMaxValue}
                 errorForStartValue={errorForStartValue}
                 setErrorForStartValue={setErrorForStartValue}
                 setErrorForMaxValue={setErrorForMaxValue}
                 checkValidationForMaxValue={checkValidationForMaxValue}
                 checkValidationForStartValue={checkValidationForStartValue}
                 incrementValue={incrementValue}
                 isIncDisabled={btnDisabling.isIncDisabled}
                 isResetDisabled={btnDisabling.isResetDisabled}
                 isSetDisabled={btnDisabling.isSetDisabled}
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
