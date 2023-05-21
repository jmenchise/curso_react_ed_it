import { types } from "../types/counter.types"

const initialState = {
    count: 0,
    inputNum: 0
}

const counterReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case types.SUMAR:
            return {
                ...state,
                count: state.count + 1
            }

        case types.RESTAR:
            return {
                ...state,
                count: state.count - 1
            }

        case types.RESET:
            return {
                ...state,
                count: 0
            }

        case types.SUMAR_NUM:
            return {
                ...state,
                count: state.count + payload
            }

        case types.SET_COUNTER:
            return {
                ...state,
                inputNum: payload
            }

        default:
            return state
    }
}

export default counterReducer  