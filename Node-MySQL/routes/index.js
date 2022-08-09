const express = require("express");
const controllers = require("../controllers");
const router = express.Router();

router.route("/list").get(controllers.getAllTodos).post(controllers.createTodo);
router
 .route("list/:id")
 .get(controllers.getTodo)
 .put(controllers.updateTodo)
 .delete(controllers.deleteTodo);
module.exports = router;