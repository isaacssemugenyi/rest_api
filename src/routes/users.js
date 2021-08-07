const { UserController } = require('../controllers/users')
const {  loginRequired } = require('../config/Authorization');

module.exports = (app) => {
    app.route('/authenticate')
        .post(UserController.login);
    app.route('/users')
        .get(loginRequired, UserController.getusers)
        .post(UserController.createNewUser);
    app.route('/users/:id')
        .put(loginRequired, UserController.updateUser)
        .delete(loginRequired, UserController.deleteUser);
}