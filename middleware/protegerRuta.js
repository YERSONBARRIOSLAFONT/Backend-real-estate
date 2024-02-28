import jwt from 'jsonwebtoken'
import {Usuario} from '../models/index.js'

const protegerRuta = async(req, res, next) => {
    //Verificar si hay un token
    const { _token } = req.cookies;
    if(!_token){
        return res.redirect('/auth/login')
    }
        // Imprimir el token completo para verificar su estructura
        console.log("Token completo:", _token);

        const generarTokenParaUsuarioEspecifico = (usuario) => {
    const token = generarJWT(usuario);
    console.log("Token generado:", token);
    return token;
}


    //Comprobar el token
    try {
        const decoded = jwt.verify(_token, process.env.JWT_SECRET)
        console.log("Carga útil decodificada del token:", decoded);
        console.log("ID decodificado del token:", decoded.id);
        const usuario = await Usuario.scope('eliminarPassword').findByPk(decoded.id)
        console.log("Usuario encontrado:", usuario);
        //Almacenar el usuario al Req
        if(usuario) {
            req.usuario = usuario;
        }else {
            console.log('Usuario no encontrado. Redirigiendo a /auth/login');
            return res.redirect('/auth/login')
        }
        return next();
    } catch (error) {
        return res.clearCookie('_token').redirect('/auth/login')
        
    }
}

export default protegerRuta