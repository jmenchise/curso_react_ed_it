import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getAllUsers = createAsyncThunk(
    'user/getAllUsers',
    async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        return response.data
    }
)


export { getAllUsers };