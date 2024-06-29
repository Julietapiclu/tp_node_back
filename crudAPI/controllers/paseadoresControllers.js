const paseadoresModel = require ("../models/paseadoresModel.js")


/* C R U D */
/* create - read - update - delete */
// MOSTRAR TODOS LOS REGISTROS - READ - GET
const traerPaseadores= async (req,res)=>{
    try {
        const paseadores = await paseadoresModel.findAll() //  metodo de sequelize
        res.json (paseadores)
    } catch (error) {
        res.json({message:error.message}) 
    }
}

/* MOSTRAR UN REGISTRO  - READ - GET */
const traerUnPaseador= async (req,res)=>{
try {                                             /*  /2 */
    const paseador = await paseadoresModel.findByPk(req.params.id)
    res.json(paseador)
} catch (error) {
    res.json({message:error.message}) 
}
}

/* CREAR UN REGISTRO - CREATE - POST */

const crearPaseador = async (req,res)=>{
    try {
        await paseadoresModel.create(req.body)
res.json({"message": "Registro creado correctamente"})
    } catch (error) {
        res.json({message:error.message}) 
    }
}

/* ACTUALIZAR UN REGISTRO - UPDATE - PUT */

const actualizarPaseador = async (req,res) =>{
    try {
        await paseadoresModel.update(req.body,{
            where :{id:req.params.id}
        })
        res.json({"message": "Registro actualizado correctamente"}) 
    } catch (error) {
        res.json({message:error.message}) 
    }
}

const borrarPaseador = async (req,res)=>{
    try {
        await paseadoresModel.destroy({where :{id:req.params.id}})
        res.json({"message": "Paseador Borrado correctamente"}) 
    } catch (error) {
        res.json({message:error.message}) 
    }
}


module.exports= {traerPaseadores,traerUnPaseador,crearPaseador,actualizarPaseador,borrarPaseador }