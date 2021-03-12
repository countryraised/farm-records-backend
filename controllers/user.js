const User = require('../models').User;
const City = require('../models').City;
const Post = require('../models').Post;



const getProfile = (req, res) => {
    let sort = 'DESC';
    if(req.query.sorted === 'asc')
        sort = 'ASC';
    
    User.findByPk(req.params.id, {
        include: [
            
        ],
        attributes: ['id', 'name', 'username'],
        order: [
            [{model: Post}, 'createdAt', sort]
        ]
    })
    .then(userProfile => {
        res.status(200).json(userProfile)
    })
    
}


module.exports = {
    getProfile,
    
}