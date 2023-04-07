import { useEffect, useState } from 'react'
import useLayout from './useLayout';
import { axiosClient } from '../axios';

const useFavorites = () => {

    const [favorites, setFavorites] = useState([]);
    const {showLoading, hideLoading} = useLayout();

    useEffect(() => {
        getFavorites();
        // eslint-disable-next-line
    }, [])
    

    const getFavorites = async () => {
        showLoading();
        try {
            const response = await axiosClient.get('/favorites');
            console.log(response.data);
            setFavorites(response.data);
            hideLoading();
        } catch (error) {
            console.log(error.message);
            hideLoading();
        }
    }

    const addFavorites = async product => {
        showLoading();
        try {
            const response  = await axiosClient.post('/favorites', product);
            await getFavorites();
            console.log(response.data);
            hideLoading();
        } catch (error) {
            console.log(error.message);
            hideLoading();
        }
    }

    const removeFavorites = async id => {
        showLoading();
        try {
            await axiosClient.delete(`/favorites/${id}`);
            await getFavorites();
            hideLoading();
        } catch (error) {
            console.log(error.message);
            hideLoading();
        }
    }
    
    return {
        favorites,
        getFavorites,
        addFavorites,
        removeFavorites
    }
}

export default useFavorites