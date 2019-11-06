const { Router } = require("express");

const routes = Router();

const UserController = require("./controllers/UserController");

const CommerceController = require("./controllers/CommerceController");

routes.post("/user", UserController.store);

routes.post("/commerce", CommerceController.store);

routes.get("/user", UserController.list);

routes.get("/commerce", CommerceController.list);

routes.get("/user/:email", UserController.index);

routes.get("/commerce/:name", CommerceController.index);

routes.put("/user/:id", UserController.update);

routes.put("/commerce/:id", CommerceController.update);

routes.delete("/user/:id", UserController.destroy);

routes.delete("/commerce/:id", commerceController.destroy);

module.exports = routes;
