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
    User.findAll()
    .then(fields => {
        res.status(200).json(fields)
    })
}

const login = (req, res) => {
    User.findOne({
        where: {
            username: req.body.username,
            password: req.body.password
        }
    })
    .then(foundUser => {
        res.send(foundUser);
    })   
}

const signup = (req, res) => {
    User.create(req.body)
    .then(newUser => {        
        res.send(newUser);
    })    
}




module.exports = {
    getProfile,
    signup,
    login,
    getAll,
}