const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const UsuarioSchema = new mongoose.Schema({
    nombre: String,
    apellido: String
}, { collection: 'usuarios' });

const Usuario = mongoose.model('Usuario', UsuarioSchema);

module.exports = Usuario;