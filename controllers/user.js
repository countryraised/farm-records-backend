const User = require('../models').User;
const FarmRecord = require('../models').FarmRecord;




const getProfile = (req, res) => {
    let sort = 'DESC';
    if(req.query.sorted === 'asc')
        sort = 'ASC';
    
    User.findByPk(req.params.id, {
        include: [{
            model: FarmRecord,
            attributes: ["id", "fieldName", "dateComplete", "operationType", "details", "userId"]
        }],
        attributes: ['id', 'name', 'username'],
        order: [
            [{model: FarmRecord}, 'createdAt', sort]
        ]
    })
    .then(userProfile => {
        res.status(200).json(userProfile)
    })
    
}

const getAll = (req, res) => {
    FarmRecord.findAll()
    .then(records => {
        res.status(200).json(records)
    })
}


module.exports = {
    getProfile,
    getAll,
}