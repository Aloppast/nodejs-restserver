const { Router } = require ( 'express' );
const { usuariosGet, usuariosPut, usuariosPost, usuariosDelete, usuariosPatch } = require('../controllers/usuarios-controller');
const router = Router();

router.get('/', usuariosGet);

//El siguiente número o param que vaya en la URL será cogido como 'id'
router.put('/:id', usuariosPut);

router.post('/',usuariosPost);

router.delete('/', usuariosDelete);

router.patch('/', usuariosPatch);

module.exports = router;