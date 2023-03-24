import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const useCounter = (initialValue=1) => {
    const [count, setCount] = useState(initialValue);
    const navigate = useNavigate();

    const handleAdd = () => setCount(count + 1);
    const handleSubstract = () => count > 1 && setCount(count -1);
    const handleRedirect = () => navigate('/cart');


    return {
        count,
        handleAdd,
        handleSubstract,
        handleRedirect
    }
}

export default useCounter