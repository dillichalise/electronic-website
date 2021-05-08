const express = require("express");
const LoginController = require("../controllers/login");
const {
  userController,
  categoryController,
  productController,
} = require("../controllers");
const router = express.Router();

router.post("/login", LoginController.login);

router.get("/users", userController.all);

router.get("/product-category", categoryController.all);
router.post("/product-category", categoryController.store);
router.get("/product-category/:id", categoryController.find);
router.put("/product-category/:id", categoryController.update);
router.delete("/product-category/:id", categoryController.destroy);

router.get("/products", productController.all);
router.get("/featured-products", productController.featured);
router.post("/products", productController.store);
router.get("/products/:id", productController.find);
router.put("/products", productController.update);
router.delete("/products/:id", productController.destroy);

module.exports = router;
