import { types } from "../types/counter.types";



const counterSum = () => ({
    type: types.SUMAR
})

const counterRest = () => ({
    type: types.RESTAR
})

const counterReset = () => ({
    type: types.RESET
})

const counterSumNum = number => ({
    type: types.SUMAR_NUM,
    payload: number
})

const setCounterNum = number => ({
    type: types.SET_COUNTER,
    payload: number
})

export {
    counterSum,
    counterRest,
    counterReset,
    counterSumNum,
    setCounterNum
}