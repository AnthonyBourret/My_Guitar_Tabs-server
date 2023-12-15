const bcrypt = require('bcrypt');
const emailValidator = require('email-validator');
const { User, Song, Style, Tuning } = require('../models');

const userController = {
    // Function to find one user
    async findUser(req, res) {
        try {
        const userId = req.params.id;
        const user = await User.findByPk(userId);
        // If user is not found, return 404 error
        if (!user) {
            res.status(404).json({ error: 'User not found' });
            return;
        }
        // The user informations are sent as a JSON object
        res.json(user);

        } catch (error) {
            console.trace(error);
            res.status(500).json(error.toString());
        }
    },

    // Function to find all songs of one user
    async findUserSongs(req, res) {
        try {
        const userId = req.params.id;
        // The songs are found using the user_id, and the styles and tuning are included
        const songs = await Song.findAll({
            where: {
                user_id: userId
            }, 
            include: [
                {model: Style},
                {model: Tuning},
            ]
        });

        // If songs are not found, return 404 error
        if (!songs) {
            res.send({ error: 'Songs not found' });
            return;
        }
        // All songs are sent as a JSON object
        res.json(songs);

        } catch (error) {
            console.trace(error);
            res.status(500).json(error.toString());
        }
    },

    // Function to create a new user
    async createUser(req, res) {
        try {
            const {
                username,
                mail,
                password,
                passwordConfirm,
                picture,
            } = req.body;

            // If the email is not valid, return 400 error
            if (!emailValidator.validate(mail)) {
                res.status(400).json({ error: 'Invalid email' });
                return
            }

            const checkMail = await User.findOne({
                where: {
                    mail: mail,
                }
            });

            // If the email is already used, return 400 error
            if (checkMail) {
                res.status(400).json({ error: 'Email already used' });
                return;
            }

            // If the password and the pconfirmed password are not the same, return 400 error
            if (password !== passwordConfirm) {
                res.status(400).json({ error: 'Passwords do not match' });
                return;
            }

            // The password is hashed
            const saltRounds = 10;
            const hashedPassword = await bcrypt.hash(password, saltRounds);
                
            const newUser = await User.create({
                username,
                mail,
                password: hashedPassword,
                picture,
            });

            if (!newUser) {
                res.status(404).json({ error: 'An error occured' });
                return;
            }

        res.json("Account created successfully");

        } catch (error) {

            console.trace(error);
            res.status(500).json(error.toString());
        }
    },
    // Function to modify user informations
    async updateUser(req, res) {
        try {
            const userId = req.params.id;
            const updatedUser = await User.findByPk(userId);

            const {
                username,
                mail,
                password,
                passwordConfirm,
                picture,
            } = req.body;

            // If the new password and the confirmed new password are not the same, return a 400 error
            if (password !== passwordConfirm) {
                res.status(400).json({ error: 'Passwords do not match' });
                return;
            }
            await updatedUser.update({
                username,
                mail,
                password,
                picture,
            });

            if (!updatedUser) {
                res.status(404).json({ error: 'An error occured' });
                return;
            }
            res.json("Modifications saved");

        } catch (error) {
            console.trace(error);
            res.status(500).json(error.toString());
        }
    },

    // Function to delete a user
    async deleteUser(req, res) {
        const userId = req.params.id;
        const user = await User.findByPk(userId);

        await user.destroy();

        res.json('User deleted');
    }
}

module.exports = userController;