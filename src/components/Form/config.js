
export const registerData = {
    email: '',
    password: '',
    repeatPassword: ''
}

export const loginData = {
    email: '',
    password: ''
}

export const registerDataInputs = [
    {
        id: 'emailID',
        type: 'email',
        placeholder: 'usuario@gmail.com',
        name: 'email',
        required: true
    },
    {
        id: 'passwordID',
        type: 'password',
        placeholder: '******',
        name: 'password',
        required: true,
    },
    {
        id: 'repeatPasswordID',
        type: 'password',
        placeholder: 'usuario1234',
        name: 'repeatPassword',
        required: true,
    }
]

export const loginDataInputs = [
    {
        id: 'emailID',
        type: 'email',
        placeholder: 'usuario@gmail.com',
        name: 'email',
        required: true
    },
    {
        id: 'passwordID',
        type: 'password',
        placeholder: '******',
        name: 'password',
        required: true,
    }
]

