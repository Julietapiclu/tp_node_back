
const express = require ("express")
const router= express.Router()

const {traerPaseadores,traerUnPaseador,crearPaseador,actualizarPaseador,borrarPaseador } = require ("../controllers/paseadoresControllers.js")

router.get ("/",traerPaseadores) 
router.get ("/:id",traerUnPaseador)
router.post ("/",crearPaseador) 
router.put ("/:id",actualizarPaseador ) 
router.delete ("/:id",borrarPaseador)
                    module.exports= router