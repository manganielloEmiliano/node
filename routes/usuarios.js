const express = require('express');
const router = express.Router();

let usuarios = [
    { id: 1, nombre: 'Juan', apellido: 'Perez', email: 'perezJUan@gmail.com' },
    { id: 2, nombre: 'Ana', apellido: 'Gomez', email: 'anaGomez@gmail.com' },
    { id: 3, nombre: 'Pedro', apellido: 'Marmol', email: 'pedroMarmol@gmail.com' },
    { id: 4, nombre: 'Pablo', apellido: 'Marmol', email: 'pabloMarmol@gmail.com' },
];

router.get('/', (req, res) => {
    res.json(usuarios);
});

router.get('/:id', (req, res) => {
    const user = usuarios.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).send('El usuario no fue encontrado');
    res.json(user);
});

router.post('/', (req, res) => {
    const { nombre, apellido, email } = req.body;

    // Verifica si los campos necesarios están presentes en el cuerpo de la solicitud
    if (!nombre || !apellido || !email) {
        return res.status(400).json({ error: 'Nombre, apellido y email son requeridos' });
    }

    const nuevoUsuario = {
        id: usuarios.length + 1,
        nombre: nombre,
        apellido: apellido,
        email: email
    };

    usuarios.push(nuevoUsuario);
    res.status(201).json(nuevoUsuario);
});
router.put('/:id', (req, res) => {
    const user = usuarios.find(u => u.id === parseInt(req.params.id));
    if (!user) res.status(404).send('El usuario no fue encontrado');

    user.nombre = req.body.nombre || user.nombre;
    user.apellido = req.body.apellido || user.apellido;
    user.email = req.body.email || user.email;

    res.json(user);
});
router.delete('/:id', (req, res) => {
    const indiceUsuario = usuarios.findIndex(u => u.id === parseInt(req.params.id));
    
    if(indiceUsuario === -1)
    return res.status(404).send("usuario no encontrado");
    
    const usuarioEliminado = usuarios.splice(indiceUsuario,1);
    res.json(usuarioEliminado);

});
module.exports = router;
