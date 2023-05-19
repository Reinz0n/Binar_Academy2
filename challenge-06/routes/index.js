const express = require('express');
const router = express.Router();
const component = require('../controllers/component');
const product = require('../controllers/product');
const supplier = require('../controllers/supplier');

router.get('/', (req, res) => res.status(200).json({
    message: "welcome to challenge 6!"
}));

// components
router.get('/components', component.index); // get all components
router.get('/components/:component_id', component.show); // get detailed component
router.post('/components', component.store); // create new component
router.put('/components/:component_id', component.update); // update component
router.delete('/components/:component_id', component.destroy); // delete component

// products
router.get('/products', product.index); // get all products
router.get('/products/:product_id', product.show); // get detailed product
router.post('/products', product.store); // create new product
router.put('/products/:product_id', product.update); // update product
router.delete('/products/:product_id', product.destroy); // delete product

// suppliers
router.get('/suppliers', supplier.index); // get all suppliers
router.get('/suppliers/:supplier_id', supplier.show); // get detailed supplier
router.post('/suppliers', supplier.store); // create new supplier
router.put('/suppliers/:supplier_id', supplier.update); // update supplier
router.delete('/suppliers/:supplier_id', supplier.destroy); // delete supplier

module.exports = router;