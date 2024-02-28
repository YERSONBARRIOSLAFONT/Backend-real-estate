import bcrypt from 'bcrypt'

const usuarios = [
    {
        id: 1,
        nombre: 'yerson',
        email: 'yerson@mail.com',
        confirmado: 1,
        password: bcrypt.hashSync('password', 10)
    }
]

export default usuarios