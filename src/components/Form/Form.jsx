import React, {useState} from 'react'


const Form = (props) => {

    const {condicional} = props


    const[form, setForm] = useState({
        email: '',
        pasword: '',
    })


    const{email, pasword} = form


    const handleChange = e => {
        const{value, name} = e.target;
        setForm({
            ...form,
            [name]: value
        })
    }


    const handleSubmit = e => {
        e.preventDefault();
        console.log(form);
        setForm({
            email: '',
            pasword: '',
        })
    }



    return (
        <div>
            <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection:'column', width:'40%', margin:'40px auto' }}>
                <h1>Formulario</h1>
                <label htmlFor="email">Email:</label>
                <input 
                    onChange={handleChange}
                    value={email}
                    type="email"
                    name='email'
                    placeholder= 'usuario@email.com'
                />
                <label htmlFor="pasword">Contraseña:</label>
                <input 
                    onChange={handleChange}
                    value={pasword}
                    type="pasword"
                    placeholder='*******'
                    name='pasword'
                />
                <input type="submit" value="Enviar" />
            </form>
            {condicional && <div>Acá el condicional llegó true</div>}
        </div>
    )
}

export default Form