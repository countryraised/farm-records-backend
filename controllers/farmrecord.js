const FarmRecord = require('../models').FarmRecord;

// const constants = require('../constants');


const getAll = (req, res) => {
    FarmRecord.findAll()
    .then(records => {
        res.status(200).json(records)
    })
}

const createField = (req, res) => {
    FarmRecord.create(req.body)
    .then(newField => {   
        res.send(newField);
    })
}

module.exports = {
    getAll,
    createField
}