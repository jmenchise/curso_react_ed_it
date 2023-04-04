import { useState } from 'react'
import useLayout from './useLayout';
import { axiosClient } from '../axios';

const useWishList = () => {

    const [wishList, setWishList] = useState([]);
    const {showLoading, hideLoading} = useLayout();

    const getWishList = async () => {
        showLoading();
        try {
            const response = await axiosClient.get('/wishlist');
            console.log(response.data);
            setWishList(response.data);
            hideLoading();
        } catch (error) {
            console.log(error.message);
            hideLoading();
        }
    }
    
    return {
        getWishList,
        wishList
    }
}

export default useWishList