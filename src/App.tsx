import React, {useEffect, useState} from 'react';
import './App.css';
import Settings from "./components/settings/Settings";
import Counter from "./components/counter/Counter";

export type WorkStateTypes = 'work' | 'start' | 'error';
type lSDataType = {
    startValue: number;
    maxValue: number;
};


function App() {

    const SETTINGS_VALUES = 'SETTINGS_VALUES';

    const [count, setCount] = useState(0);
    const [maxValue, setMaxValue] = useState(1);
    const [startValue, setStartValue] = useState(0);
    const [workState, setWorkState] = useState<WorkStateTypes>('start');

    useEffect(() => {
        getDataFromLocalStorage();
    }, []);

    const setDataToLocalStorage = () => {
        const data: lSDataType = {
            startValue: startValue,
            maxValue: maxValue
        }
        const stringData = JSON.stringify(data);
        localStorage.setItem(SETTINGS_VALUES, stringData);
    }

    const getDataFromLocalStorage = () => {
        const stringData = localStorage.getItem(SETTINGS_VALUES);
        if (stringData !== null) {
            const data = JSON.parse(stringData) as lSDataType;
            handleSetMaxValue(data.maxValue);
            handleSetStartValue(data.startValue);
        }
    }

    const increment = () => {
        setCount(count + 1);
    }

    const reset = () => {
        setCount(startValue);
    }

    const changeWorkState = (value: WorkStateTypes) => {
        setWorkState(value);
    }

    const handleSetMaxValue = (newValue: number) => {
        setMaxValue(newValue);
        if (newValue < 1 || newValue === startValue) {
            setWorkState('error');
        } else if (startValue >= 0 && newValue > startValue) {
            setWorkState('start');
        }
    }

    const handleSetStartValue = (newStartValue: number) => {
        setStartValue(newStartValue);
        if ((newStartValue < 0 && newStartValue < maxValue) || newStartValue === maxValue) {
            setWorkState('error');
        } else if (maxValue >= 1 && newStartValue < maxValue) {
            setWorkState('start');
        }
    }


    return (
        <div className="App">
            <Settings count={count}
                      startValue={startValue}
                      maxValue={maxValue}
                      setMaxValue={handleSetMaxValue}
                      setStartValue={handleSetStartValue}
                      changeWorkState={changeWorkState}
                      saveData={setDataToLocalStorage}
                      workState={workState}/>
            <Counter count={count}
                     increment={increment}
                     reset={reset}
                     maxValue={maxValue}
                     workState={workState}/>
        </div>
    )
}

export default App;
