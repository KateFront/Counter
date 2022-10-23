import {WorkStateTypes} from "../AppWithRedux";
import {ACTIONS_TYPE, CounterReducerType} from "./action";

/*const [count, setCount] = useState(0);
const [maxValue, setMaxValue] = useState(1);
const [startValue, setStartValue] = useState(0);
const [workState, setWorkState] = useState<WorkStateTypes>('start');*/

export type CounterStateType = {
    count: number,
    maxValue: number,
    startValue: number,
    workState: WorkStateTypes
}

const initialState: CounterStateType = {
    count: 0,
    maxValue: 1,
    startValue: 0,
    workState: 'start'
}


export const counterReduser = (state = initialState, action: CounterReducerType): CounterStateType => {
    switch (action.type) {
        case ACTIONS_TYPE.SET_COUNT:
            return {
                ...state,
                count: action.count
            }
        case ACTIONS_TYPE.SET_MAX_VALUE:
            return {
                ...state,
                maxValue: action.maxValue
            }
        case ACTIONS_TYPE.SET_START_VALUE:
            return {
                ...state,
                startValue: action.startValue
            }
        case ACTIONS_TYPE.SET_WORK_STATE:
            return {
                ...state,
                workState: action.workState
            }
        default:
            return state;
    }
}



