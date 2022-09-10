const { Router } = require('express');
const { loginMovie,allMovie, createMovie, updateMovie, deleteMovie, patchMovie } = require('../controllers/Movie.controller');
const router = Router();

router.get(
    '/',
    allMovie);

router.post(
    '/',
    createMovie)

router.put(
    '/:id',
    updateMovie)
/*
router.patch(
    '/',
    patchMovie)
*/
router.delete(
    '/:id',
    deleteMovie)

module.exports = router;