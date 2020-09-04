// node modules
const path = require("path");
// express modules
const express = require("express");
const router = express.Router();
// local import
const shopController = require("../controller/shop");

// Routes
// index page
router.get("/", shopController.getIndex);

// get all products
router.get("/products", shopController.getProducts);

// get one one product
router.get("/products/:productId", shopController.getOneProduct);
// cart page
router.get("/cart", shopController.getCart);
// post cart route
router.post("/cart", shopController.postCart);

// delete cart item
router.post("/cart-delete-item", shopController.postCartDeleteProduct);

// order page
router.get("/orders", shopController.getOrders);
router.post("/create-order", shopController.postOrder);

// checkout page
router.get("/checkout", shopController.getCheckout);

module.exports = router;
