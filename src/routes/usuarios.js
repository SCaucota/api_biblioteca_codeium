const express = require("express");
const router = express.Router();

const { getAllUsuarios, getUsuarioById, createUsuario, updateUsuario, deleteUsuario} = require("../controllers/usuarioController");

const { requiredScopes } = require("express-oauth2-jwt-bearer");

router.get("/", requiredScopes("read:libros"), getAllUsuarios);

router.get("/:id", requiredScopes("read:libros"), getUsuarioById);

router.post("/", requiredScopes("write:libros"), createUsuario);

router.put("/:id", requiredScopes("write:libros"), updateUsuario);

router.delete("/:id", requiredScopes("write:libros"), deleteUsuario);

module.exports = router;