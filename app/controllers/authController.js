const bcrypt = require('bcrypt');

const { User } = require('../models');

const authController = {
    // Function to login
    async login(req, res) {
        try {
            const { username, password } = req.body;
            
            const user = await User.findOne({
                where: {
                    username: username
                }
            });
            // If the username is not found, return 404 error
            if (!user) {
                res.status(404).json({ error: 'Incorrect username or password' });
                return;
            }

            // The password is compared to the hash password in the database
            const passwordValid = await bcrypt.compare(password, user.password);

            if (!passwordValid) {
                res.status(404).json({ error: 'Incorrect username or password' });
                return;
            }

            // The user informations are formatted to be sent in the req.session
            const userInfos = {
                id: user.id,
                username: user.username,
                mail: user.mail,
                picture: user.picture,
            };

            req.session.user = userInfos.id;
            res.json({ id: userInfos.id, username: userInfos.username, picture: userInfos.picture });

        } catch (error) {
            console.trace(error);
            res.status(500).json("Server Error");
        }
    },

    // Function to logout
    async logout(req, res) {
        delete req.session.user;
        res.json({ message: 'Successfully logged out' })
    }
};

module.exports = authController;