import { types } from "../types/user.types";


const changeValue = obj => ({
    type: types.CHANGE_VALUE,
    payload: obj
})



export { changeValue };
