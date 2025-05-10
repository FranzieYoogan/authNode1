const User = require('../models/user.model');
const bcrypt = require('bcrypt');

function createUser(req, res) {

    const {email, password, name, role} = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);
   
    const newUser = new User({

        email,
        password: hashedPassword,
        name,
        role
    });
    
    newUser.save()
        .then(user => {

            res.status(201).json({

                message: 'User created',
                user: {
                    id: user._id,
                    email: user.email,
                    name: user.name,
                    role: user.role
                }

            })

        })

        .catch(err => {

            console.log(err)
            res.status(500).json({

                message: 'Error creating user',
                error: err.message

            })

        
        })

    }

    function loginUser(req, res) {

        const {email, password} = req.body;
        User.findOne({email})
        .then(user => {

            if (!user) {

                return res.status(404).json({

                    message: 'User not found'
                })

            }

            const isMatch = bcrypt.compareSync(password, user.password);
            if(!isMatch) {
                
                return res.status(401).json({

                    message: 'Invalide credentials'

                })
            }

            res.status(200).json({

                message: 'User Loggend in',
                user: {

                    id: user._id,
                    email: user.email,
                    name: user.name,
                    role: user.role

                }

            })

        })

        .catch(err => {

            console.log(err)
            res.status(500).json({

                message: 'Error logging in user',
                error: err.message

            })

        })

    }

    function getAll(req, res) {

        User.find()
        .then(users => {

            res.status(200).json({

                message: 'Users fetched',
                users: users.map(user => {

                    return {
                        id: user._id,
                        email: user.email,
                        name: user.name,
                        role: user.role
                    }

                })

            })

        })

        .catch(err => {

            console.log(err)
            res.status(500).json({

                message: 'Error fetching users',
                error: err.message

            })

        })

    }


module.exports = {

    createUser,
    loginUser,
    getAll

}

