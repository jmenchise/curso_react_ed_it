import React from 'react'
import { IProps } from './interface';




const Counter = (props: IProps) => {

    const { jugadoresDeFutbol } = props;

    return (
        <div>
            {jugadoresDeFutbol.map(({ nombre, apellido }, index) => (
                <React.Fragment key={index}>
                    <h1>{nombre}</h1>
                    <h1>{apellido}</h1>
                </React.Fragment>
            ))}
        </div>
    )
}

export default Counter