const router = require('express').Router();
const {createTodo, getAll, singleTodo, deleteOne, updateOne} = require("../controller/todoController")

router.post("/", createTodo)
router.get("/getall", getAll)
router.route("/getall/:id").get(singleTodo).patch(updateOne).delete(deleteOne)
// router.get("/getall/:id", singleTodo)
// router.delete("/getall/:id", deleteOne)
// router.patch("/getall/:id", updateOne)



module.exports = router