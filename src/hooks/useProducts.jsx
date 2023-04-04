import { useState } from 'react'
import useLayout from './useLayout';
import { axiosClient } from '../axios';

const useProducts = () => {

    const {showLoading, hideLoading} = useLayout();
    const [products, setProducts] = useState([]);
    
    const getProducts = async () => {
        showLoading();
        try{
            const response = await axiosClient.get('/products');
            console.log(response.data);
            setProducts(response.data);
            hideLoading();
        } catch (error) {
            console.log(error.message);
            hideLoading();
        }
    }
    
    
    return {
        products,
        getProducts
    }
}

export default useProducts