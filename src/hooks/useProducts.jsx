import { useEffect, useState } from 'react'
import useLayout from './useLayout';
import { axiosClient } from '../axios';

const useProducts = () => {

    const {showLoading, hideLoading} = useLayout();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
        // eslint-disable-next-line
    }, []);
    
    
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
    
    const saveProduct = async product => {
        showLoading();
        try{
            const response = await axiosClient.post('/products', product);
            await getProducts();
            console.log(response.data);
            hideLoading();
        } catch (error) {
            console.log(error.message);
            hideLoading();
        }
    }
    
    const putProduct = async product => {
        showLoading();
        const { id } = product;
        try {
            const response = await axiosClient.put(`/products/${id}`, product);
            console.log('response.data:', response.data);
            await getProducts();
            hideLoading();
        } catch (error) {
            console.log(error.message);
            hideLoading();
        }
    }
    
    const deleteProduct = async id => {
        showLoading();
        try {
            await axiosClient.delete(`/products/${id}`);
            await getProducts();
            hideLoading();
        } catch (error) {
            console.log(error.message);
            hideLoading();
        }
    }
    
    
    return {
        products,
        getProducts,
        saveProduct,
        putProduct,
        deleteProduct
    }
}

export default useProducts