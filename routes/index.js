var express = require('express');
var router = express.Router();
let upload = require('../multer/multer')

let CateoryController = require("../Controller/category")
let QuestionsController = require("../Controller/Questions");
const { SECURE } = require('../middleware/Secure');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/category/add',SECURE ,upload.fields([{name:"image",maxCount:1}]), CateoryController.add);

router.get("/category/show",SECURE ,CateoryController.show)

router.patch("/category/update",SECURE ,upload.fields([{name:"image",maxCount:1}]), CateoryController.updates)

router.delete("/category/delete", SECURE ,CateoryController.delete)

router.post("/que/add", SECURE, QuestionsController.add)

router.get("/que/show", SECURE, QuestionsController.show)

router.patch("/que/update", SECURE,QuestionsController.update)

router.delete("/que/delete", SECURE,QuestionsController.delete)

module.exports = router;
