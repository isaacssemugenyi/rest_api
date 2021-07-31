const { UserController } = require('../controllers/users')

module.exports = (app) => {
    app.route('/users')
        .get(UserController.getusers)
        .post(UserController.createNewUser);
    app.route('/users/:id')
        .put(UserController.updateUser)
        .delete(UserController.deleteUser);
}