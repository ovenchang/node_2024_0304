const express = require('express')
const router = express.Router()

/* 記帳列表頁面 */
router.get('/', function (req, res, next) {
  res.render('accounts/list')
});

/**添加記帳頁面 */
router.get('/create', function (req, res, next) {
  res.render('accounts/create')
});

/**新增紀錄 */
router.post('/', function (req, res, next) {
  console.log(req.body)
  res.send('post')
});
module.exports = router;
