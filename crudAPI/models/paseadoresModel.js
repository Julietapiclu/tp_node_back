const db = require ("../data/db.js")

const {DataTypes} = require ("sequelize")

const paseadoresModel = db.define ("paseadores",{
    nombre:{type:DataTypes.STRING},
    dias_paseo:{type:DataTypes.STRING},
    horario:{type:DataTypes.STRING},
    recorrido:{type:DataTypes.STRING}
})
module.exports = paseadoresModel