const { response } = require('express');
const User = require('../models/usuario.model')
const usuariosGet = async (req, res = response) => {
  try {
    const usuarios = await User.findAll();
    response.status(200).json({
      usuarios
    })
  } catch (error) {
    console.log(error);
    response.status(400).send(error);
  }
}

const allUser = async (req, res = response) => {
  try {
    const usuarios = await User.findAll();
    res.status(200).json(usuarios);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
}
const createUser = async (req, res = response) => {
  try {
    const { name, email, password } = req.body;
    const user = await User.create({ name, email, password });
    res.status(200).json({ user });
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
}
const updateUser = async (req, res = response) => {
  try {
    const { name, email, password } = req.body;
    const id = req.params.id;
    const usuario = await User.findOne({ where: { id } });

    if (!usuario) {
      return res.status(400).json("User not found");
    }
    usuario.name = name;
    usuario.email = email;
    usuario.password = password;

    await usuario.save();
    res.status(200).json({usuario});
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
}
const deleteUser = async (req, res = response) => {
  try {
    const id = req.params.id;
    const usuario = await User.destroy({ where: { id } });
    if (!usuario) {
      return res.status(400).json("User not found");
    }
    res.status(200).json("User removed!!");
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
}
const patchUser = (req, res = response) => {
  res.json({ ok: true, msj: 'patch api' })
}
module.exports = {
  allUser,
  createUser,
  updateUser,
  deleteUser,
  patchUser
}