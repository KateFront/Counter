import React, {useEffect} from 'react';
import './App.css';
import Settings from "./components/settings/Settings";
import Counter from "./components/counter/Counter";
import {useDispatch, useSelector} from "react-redux";
import {countAC, maxValueAC, startValueAC, workStateAC} from "./redux/action";
import {IGlobalState} from "./redux/store";
import {CounterStateType} from "./redux/counterReducer";

export type WorkStateTypes = 'work' | 'start' | 'error';
type lSDataType = {
    startValue: number;
    maxValue: number;
};


function AppWithRedux() {

    const SETTINGS_VALUES = 'SETTINGS_VALUES';

    useEffect(() => {
        getDataFromLocalStorage();
    }, []);

    const {
        count,
        startValue,
        maxValue,
        workState
    } = useSelector<IGlobalState, CounterStateType>(store => store.counter);

    const dispatch = useDispatch();

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
        dispatch(countAC(count+1));
    }

    const reset = () => {
        dispatch(countAC(startValue));
    }

    const handleSetClick = () =>{
        dispatch(countAC(startValue));
        dispatch(workStateAC('work'));
        setDataToLocalStorage();
    }

    const handleSetMaxValue = (newValue: number) => {
        dispatch(maxValueAC(newValue));
        if (newValue < 1 || newValue === startValue) {
            dispatch(workStateAC('error'));
        } else if (startValue >= 0 && newValue > startValue) {
            dispatch(workStateAC('start'));
        }
    }

    const handleSetStartValue = (newStartValue: number) => {
        dispatch(startValueAC(newStartValue));
        if ((newStartValue < 0 && newStartValue < maxValue) || newStartValue === maxValue) {
            dispatch(workStateAC('error'));
        } else if (maxValue >= 1 && newStartValue < maxValue) {
            dispatch(workStateAC('start'));
        }
    }

    return (
        <div className="App">
            <Settings count={count}
                      startValue={startValue}
                      maxValue={maxValue}
                      setMaxValue={handleSetMaxValue}
                      setStartValue={handleSetStartValue}
                      workState={workState}
                      handleSetClick={handleSetClick}/>
            <Counter count={count}
                     increment={increment}
                     reset={reset}
                     maxValue={maxValue}
                     workState={workState}/>
        </div>
    )
}

export default AppWithRedux;
