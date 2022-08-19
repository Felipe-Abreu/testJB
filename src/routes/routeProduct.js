const router = require('express').Router();

const {
  create, update, remove, show,
} = require('../controllers/productController');

router.post('/product', create);
router.put('/product/:id', update);
router.delete('/product/:id', remove);
router.get('/product', show);

module.exports = router;
