const path = require("path");
const express = require("express");
const adminController = require("../controller/admin");

const router = express.Router();

router.get("/add-product", adminController.getAddProduct);

router.get("/products", adminController.getAdminProducts);

router.post("/add-product", adminController.postAddProduct);

router.get("/edit-product/:productId", adminController.getEditProduct);

router.post("/edit-product", adminController.postEditProduct);

router.post("/delete-product", adminController.postDeleteProduct);
exports.router = router;
