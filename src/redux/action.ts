import {WorkStateTypes} from "../AppWithRedux";

export enum ACTIONS_TYPE {
    SET_COUNT = "Counter/SET_COUNT",
    SET_MAX_VALUE = "Counter/SET_MAX_VALUE",
    SET_START_VALUE = "Counter/SET_START_VALUE",
    SET_WORK_STATE = "Counter/SET_WORK_STATE"
}

export type SetCountType = { type: ACTIONS_TYPE.SET_COUNT, count: number };
export type SetMaxValueType = { type: ACTIONS_TYPE.SET_MAX_VALUE, maxValue: number };
export type SetStartValueType = { type: ACTIONS_TYPE.SET_START_VALUE, startValue: number };
export type SetWorkStateType = { type: ACTIONS_TYPE.SET_WORK_STATE, workState: WorkStateTypes };

export type CounterReducerType = SetCountType | SetMaxValueType | SetStartValueType | SetWorkStateType;

export const countAC = (count: number): SetCountType => {return {type: ACTIONS_TYPE.SET_COUNT, count}};
export const maxValueAC = (maxValue: number): SetMaxValueType => {return { type: ACTIONS_TYPE.SET_MAX_VALUE, maxValue}};
export const startValueAC = (startValue: number): SetStartValueType => {return {  type: ACTIONS_TYPE.SET_START_VALUE, startValue}};
export const workStateAC = (workState: WorkStateTypes): SetWorkStateType => {return { type: ACTIONS_TYPE.SET_WORK_STATE, workState}};

