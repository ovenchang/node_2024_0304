/*****mongoose */
//對象文檔模型庫
//方便操作mongodb數據庫
//安裝mongoose
//npm init
//npm i

//mongoose 模塊化
const db = require('./db/db')
const mongoose = require("mongoose")
const BookModel = require('./models/BookModel')

db(async () => {
  /*********插入文檔**/

  //新增文檔資料
  const book = new BookModel({ name: "qq", author: "dd", price: 564, is_new: true, tags: ['11', '22'], pub_time: new Date(), test: { sort: 1, subname: '122' } })
  let rs = await book.save()
  console.log(rs)
  //關閉db connect 一般不會關
  mongoose.disconnect()
})