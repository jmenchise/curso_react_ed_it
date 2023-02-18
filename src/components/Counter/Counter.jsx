import React, {useState} from 'react'
import Button from '../../shared/Button'

const Counter = (props) => {

    const { initialNumber = 0, initialName = 'Profe' } = props

    const [contador, setContador] = useState(initialNumber)
    const [nombre, setNombre] = useState(initialName)

    const sumar = () => setContador(contador + 1)
    const restar = () => setContador(contador - 1)
    const changeName = () => setNombre('Juan')

    return (
        <div className='d-flex justify-content-around'>
            <Button buttonText='Sumar' onClick={sumar} />
            <h1>Nombre: {nombre} </h1>
            <h1>Contador: {contador} </h1>
            <Button buttonText={'Restar'} onClick={restar} />
            <Button buttonText={'Cambiar Nombre'} onClick={changeName} />
        </div>
    )
}

export default Counter