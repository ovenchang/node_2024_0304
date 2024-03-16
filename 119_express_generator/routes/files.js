var express = require('express');
var router = express.Router();

/* GET home page. */
//上傳表單
router.get('/form', function(req, res, next) {
  res.render('fileForm');
});
//處理上傳文件
router.post('/upload', function(req, res, next) {
  res.send('成功');
});

module.exports = router;
