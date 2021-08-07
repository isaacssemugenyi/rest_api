const UserModel = require('../models/users')
const jwt = require('jsonwebtoken')

exports.UserController = {
    async getusers(req, res) {
        try {
            const response = await UserModel.find();
            return res.json(response);
        } catch(err){
            throw new Error("Failed to get users");
        }
    },
    async createNewUser(req, res) {
        try {
            const response = await UserModel.create(req.body);
            return res.json(response);
        } catch(err){
            // console.log(err)
            throw new Error("Failed to post users");
        }
    },

    async login(req,res){
        try {
            const foundUser = await UserModel.findOne({email: req.body.email});
            if(!foundUser) {
                return res.status(404).json({message: 'No user found'});
            } else {
                if(foundUser.phone != req.body.phone){
                    return res.status(404).json({message: 'Phone does not match'})
                } else {
                    return res.json({
                        token: jwt.sign({firstName: foundUser.firstName, _id: foundUser.id}, process.env.SECRET_KEY)
                    })
                }
            }
        } catch (error) {
            console.log(error);
        }
    },
    async updateUser(req, res) {
        try {
            const id = req.params.id;
            const response = await UserModel.findByIdAndUpdate({_id: id}, req.body, {new: true});
            return res.json(response);
        } catch(err){
            throw new Error("Failed to updated user");
        }
    },
    async deleteUser(req, res) {
        try {
            const id = req.params.id;
            const response = await UserModel.findByIdAndDelete({_id: id});
            return res.json({message: 'Resource deleted successfully'});
        } catch(err){
            throw new Error("Failed to delete user");
        }
    }
}