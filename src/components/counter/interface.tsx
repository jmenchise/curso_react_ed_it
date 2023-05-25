
interface IJugadorDeFutbol {
    nombre: string,
    apellido: string
}

export interface IUser {
    name?: 'string',
    apellido?: 'string'
}


export interface IProps {
    initialValue?: number | string,
    arr: number[] | string[],
    saludar: () => void,
    sumar: (n1: number, n2: number) => number,
    jugadoresDeFutbol: IJugadorDeFutbol[]
}

