const UserModel = require('../models/users')

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