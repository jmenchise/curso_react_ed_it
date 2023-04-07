import { useState } from "react";


const useForm = (initialState) => {

    const [form, setform] = useState(initialState);
    
    const handleChange = e => {
        const {name, value} = e.target;
        setform({
            ...form,
            [name]:value
        });
    }
    
    return {
        form,
        setform,
        handleChange
    }
}

export default useForm