const express = require("express");
const {
  userController,
  categoryController,
  productController,
} = require("../controllers");
const router = express.Router();

router.get("/users", userController.all);

router.get("/product-category", categoryController.all);
router.post("/product-category", categoryController.store);
router.get("/product-category/:id", categoryController.find);
router.put("/product-category/:id", categoryController.update);
router.delete("/product-category/:id", categoryController.destroy);

router.get("/products", productController.all);
router.post("/products", productController.store);
router.get("/products/:id", productController.find);
router.put("/products/:id", productController.update);
router.delete("/products/:id", productController.destroy);

module.exports = router;
