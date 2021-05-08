const express = require("express");
const LoginController = require("../controllers/login");
const { userController, productController } = require("../controllers");
const router = express.Router();

router.post("/login", LoginController.login);

router.get("/users", userController.all);

router.get("/products", productController.all);
router.get("/featured-products", productController.featured);
router.post("/products", productController.store);
router.get("/products/:id", productController.find);
router.put("/products", productController.update);
router.delete("/products/:id", productController.destroy);

module.exports = router;
