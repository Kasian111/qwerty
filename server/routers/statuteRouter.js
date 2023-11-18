const express = require('express')
const {
    appendStatute,
    downloadFile,
    allStatutes,
    deleteStatute,
    showImg,
    updateStatute
} = require("../controllers/statuteController");
const upload = require("../storage");

const statuteRouter = express.Router()
statuteRouter.post('/statutes', upload.fields([{name: 'img'}, {name: 'file'}]), appendStatute)
statuteRouter.get('/statutes/file/:filename', downloadFile)
statuteRouter.get('/statutes/img/:img', showImg)
statuteRouter.delete('/statutes/:_id', deleteStatute)
statuteRouter.get('/statutes', allStatutes)
statuteRouter.put('/statutes', updateStatute)
module.exports = statuteRouter