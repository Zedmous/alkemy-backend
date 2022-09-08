const { Router } = require('express');
const { allUser, createUser, updateUser, deleteUser } = require('../controllers/user.controller');
const router = Router();
router.get('/', allUser);
router.post(
    '/register',
    createUser)
router.put(
    '/:id',
    updateUser)
//router.patch('/', usuariosPatch)
router.delete(
    '/:id',
    deleteUser)

module.exports = router;