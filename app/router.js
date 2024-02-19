const { Router } = require('express');
const router = Router();

// Controllers
const mainController = require('./controllers/mainController.js');
const authController = require('./controllers/authController.js');
const userController = require('./controllers/userController.js');
const songController = require('./controllers/songController.js');
const styleController = require('./controllers/styleController.js');

router.get('/', mainController.index);

// Auth
router.post('/login', authController.login);
router.get('/logout', authController.logout);
router.post('/signup', userController.createUser);

// User
router.get('/user/:id', userController.findUser);
router.patch('/user/:id', userController.updateUser);
router.patch('/user/:id/password', userController.updatePassword);
router.delete('/user/:id', userController.deleteUser);
router.get('/user/:id/songs', userController.findUserSongs);

// Song
router.get('/infos', songController.getInfos);
router.get('/song/:id', songController.findOneSong);
router.post('/user/:id/add', songController.createOneSong);
router.patch('/song/:id', songController.updateOneSong);
router.delete('/song/:id', songController.deleteOneSong);

// Style
router.put('/song/:id/styles', styleController.updateSongStyles);
router.delete('/song/:id/styles', styleController.deleteStyle);

module.exports = router;