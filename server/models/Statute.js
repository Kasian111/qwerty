const mongoose = require('mongoose')
const Schema = mongoose.Schema

const statuteSchema = new Schema({
    title: {required: true, type: String},
    imgSrc: {required: true, type: String},
    fileSrc: {required: true, type: String},
    downloadCount: {type: Number}
})

const Statute = mongoose.model('Statute', statuteSchema)
module.exports = Statute