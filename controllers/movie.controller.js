const { response } = require('express');
//const Movie = require('../models/movie.model')
const { MovieModel } = require('../config/db.config')
const { generarJWT } = require('../helpers/generar-jwt');

const moviesGet = async (req, res = response) => {
  try {
    const movies = await MovieModel.findAll();
    response.status(200).json(
      movies
    )
  } catch (error) {
    console.log(error);
    response.status(400).send(error);
  }
}

const allMovie = async (req, res = response) => {
  try {
    const movies = await MovieModel.findAll();
    //let total=movies.length;
    let total=50;
    res.status(200).json({total,movies});
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
}
const createMovie = async (req, res = response) => {
  try {
    const { img, title,date,qualification } = req.body;
    const Movie = await MovieModel.create({ img, title,date,qualification});
    res.status(200).json({ Movie });
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
}
const updateMovie = async (req, res = response) => {
  try {
    const id = req.params.id;
    const movie = await MovieModel.findOne({ where: { id } });
    if (!movie) {
      return res.status(400).json("Movie not found");
    }

    const { img, title,date,qualification} = req.body;
    
    movie.img = img;
    movie.title = title;
    movie.date = date;
    movie.qualification = qualification;
    
    await movie.save();
    res.status(200).json({movie});
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
}
const deleteMovie = async (req, res = response) => {
  try {
    const id = req.params.id;
    const movie = await MovieModel.destroy({ where: { id } });
    if (!movie) {
      return res.status(400).json("Movie not found");
    }
    res.status(200).json("Movie removed!!");
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
}
const patchMovie = (req, res = response) => {
  res.json({ ok: true, msj: 'patch api' })
}
module.exports = {
  allMovie,
  createMovie,
  updateMovie,
  deleteMovie,
  patchMovie
}