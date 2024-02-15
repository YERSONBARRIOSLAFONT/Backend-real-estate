import {exit} from 'node:process'
import categorias from './categorias.js'
import Categoria from '../models/Categoria.js'
import precios from './precios.js'
import Precio from '../models/Precio.js'
import db from '../config/db.js'

const importarDatos = async () => {
    try {
        //Autenticar
        await db.authenticate()
        
        //Generar las Columnas
        await db.sync()

        //Insertar los datos
        await Promise.all([
            Categoria.bulkCreate(categorias),
            Precio.bulkCreate(precios)
        ])

        console.log('Datos importados correctamente')
        exit()
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

if(process.argv[2] === "-i"){
    importarDatos();
}