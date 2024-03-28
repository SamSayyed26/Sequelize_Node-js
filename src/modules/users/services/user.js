const CONSTANTS = require("../../../constants/constants");


module.exports = {

    // User Methods
    async addUser(userObj) {
        let user = await this.create(userObj)
        return user;
    },
    checkUnique(email) {
        let user = this.findOne({
            where: {
                email: email
            },
            attributes: { exclude: ['password'] }
        })
        return user;
    },
    getUser(id) {
        let user = this.findOne({
            where: {
                id: id
            }
        })
        return user;
    },
    login(email) {
        let user = this.findOne({
            where: {
                email: email
            }
        })
        return user;
    },
    async getAllUsers(limit, offset) {
        let users = await this.findAndCountAll({
            offset: offset,
            limit: limit,
            attributes: { exclude: ['password'] },
        });
        return users;
    },

    getUserById(id) {
        let user = this.findOne({
            where: {
                id: id
            },
            attributes: ['id', 'role']
        })
        return user;
    },

    async updateUser(userID, userObj) {
        let user = await this.update(
            {
                firstName: userObj.firstName,
                lastName: userObj.lastName,
                email: userObj.email,
                password: userObj.password,
            },
            {
                where: {
                    id: userID
                },
            });
        return user;
    },

    async deleteUser(userID) {
        const user = this.destroy({
            where: {
                id: userID
            }
        });
        return user;
    },

    async changeIsContentCreator(userID) {
        const user = this.update({
            role: CONSTANTS.ROLES.CONTENT_CREATOR
        }, {
            where: {
                id: userID
            }
        });
        return user;
    },

    /* ------------------------------------------------------ */
}