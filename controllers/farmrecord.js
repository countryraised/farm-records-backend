const FarmRecord = require('../models').FarmRecord;

// const constants = require('../constants');


const getAll = (req, res) => {
    FarmRecord.findAll()
    .then(records => {
        res.status(200).json(records)
    })
}

module.exports = {
    getAll
    
}