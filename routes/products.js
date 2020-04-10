var express = require('express');
var router = express.Router();
var productCtrl = require('../controller/productController')

/* GET users listing. */
/** listar */
router.get('/', productCtrl.getProduct);
/** listar uno */
router.get('/:id', productCtrl.getProductById);
/** crear */
router.post('/', productCtrl.Create);
/** modificar */
router.post('/:id', function (req, res, next) {
    res.send('index', { title: 'Express' });
});
/** eliminar */
router.delete('/:id', function (req, res, next) {
    res.send('index', { title: 'Express' });
});

module.exports = router;