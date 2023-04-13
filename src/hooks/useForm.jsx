import { useContext, useState } from "react";
import { ProductsContext } from "../context/ProductsProvider";
import { useNavigate } from "react-router-dom";


const useForm = (initialState) => {

    const [form, setform] = useState(initialState);
    const { saveProduct, putProduct } = useContext(ProductsContext);
    const navigate = useNavigate();

    
    const handleChange = e => {
        const {name, value} = e.target;
        setform({
            ...form,
            [name]:value
        });
    }

    const handleSubmit = (e, edit) => {
        e.preventDefault();
        // edit ? putProduct(form) : saveProduct(form);
        if(!edit) {
            alert('Producto dado de alta con éxito!');
            saveProduct(form);
            navigate('/');
            return
        }
        alert('Producto editado con éxito!');
        putProduct(form);
        setform(initialState);
        navigate('/');
    }


    return {
        form,
        setform,
        handleChange,
        handleSubmit
    }
}

export default useForm