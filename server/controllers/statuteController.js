const Statute = require("../models/Statute");
const {join} = require("path");

module.exports.appendStatute = async (req, res) => {
    try {
        const title = req.body.title;
        const fileSrc = req.files.file[0].originalname;
        const imgSrc = req.files.img[0].originalname;
        res.json(await Statute.create({title: title, fileSrc: fileSrc, imgSrc: imgSrc, downloadCount: 1})).status(200)
    } catch (err) {
        console.log(err)
        res.status(403).end();
    }
}

module.exports.downloadFile = async (req, res) => {
    try {
        const filename = req.params.filename;
        const filesPath = join(__dirname, '..', 'uploads');
        const filter = {fileSrc: filename};
        const update = {$inc: {downloadCount: 1}};
        await Statute.findOneAndUpdate(filter, update)
        const filePath = join(filesPath, filename);
        res.sendFile(filePath)
    } catch (err) {
        console.log(err)
        res.status(500).end()
    }
}

module.exports.allStatutes = async (req, res) => {
    try {
        res.json(await Statute.find()).status(200)
    } catch (err) {
        console.log(err)
        res.status(500).end();
    }
}

module.exports.deleteStatute = async (req, res) => {
    try {
        const _id = req.params._id
        await Statute.findByIdAndDelete(_id)
        res.status(202).end()
    } catch (err) {
        res.status(500).end()
        console.log(err)
    }
}

module.exports.showImg = async (req, res) => {
    try {
        const img = req.params.img;
        res.sendFile(img, {root: "./uploads"});
    } catch (err) {
        res.status(500).end()
        console.log(err);
    }
};

module.exports.updateStatute = async (req, res) => {
    try {
        const {statute} = req.body
        console.log(statute)
        res.json(await Statute.findByIdAndUpdate(statute._id, statute, {new: true}))
    } catch (err) {
        console.log(err)
        res.status(500).end()
    }
}