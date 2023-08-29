const express = require('express');
const router = express.Router();

const ProductController = require("../Controller/Product.Controller");

//Get a list of all Products
router.get('/', ProductController.getAllProducts);

//Create a new Product
router.post('/', ProductController.createNewProduct);

//Get a product by id
router.get('/:id', ProductController.findProductById);

//Update a product by id
router.patch('/:id', ProductController.updateAProduct)

//delete a product by id
router.delete("/:id", ProductController.deleteAProduct);

module.exports = router;