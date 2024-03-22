/*****mongoose */
//對象文檔模型庫
//方便操作mongodb數據庫
//安裝mongoose
//npm init
//npm i

const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://ovenchang:aSFPmHAwMHpJsvK4@cluster0.0qefrll.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

mongoose.connection.once('open', async () => {
  console.log('connect success')

  /***mongoose字段類型**
   * String
   * Number
   * Boolean
   * Array
   * Date
   * Buffer對象 圖片 視頻 要存內容時
   * Mixed任意類型 mongoose.Schema.Types.Mixed 指定 什麼類型都可存(string boolean obj...)
   * ObjectId對象id mongoose.Schema.Types.ObjectId指定 常用來作外鍵 存另一個文檔的objectId
   * Decimal128 高精度數字 mongoose.Schema.Types.Decimal128指定
   */

  /***mongoose 字段驗證  對文檔屬性值作校驗***
   * mongoose裡有一些驗證器 
   *1.必填
   title:{type:String,require:true}
   *2.默認值
   *title:{type:String,defalut:'123'}
   *3.枚舉值
   title:{type:String,enum:['男','女']//必須要是這兩個值其中一個
   4.唯一值 要重建集合才有用
   title:{type:String:unique:true}
   *
   */

  /*********插入文檔
  //創建文檔的結構對象
  ////約束文檔裡的屬性及類型
  let BookSchema=new mongoose.Schema({
          name:{
                  type:String,
                  require:true
          },
          author:String,
          price:Number,
          is_new:Boolean,
          tags:Array,
          pub_time:Date,
          test:mongoose.Schema.Types.Mixed
  })

  //創建模型對象 對文檔操作的封裝對象 可完成對文檔的curd動作
  //books集合名稱
  let BookModel=mongoose.model('books',BookSchema)

  //新增文檔資料
  const book=new BookModel({name:"qq",author:"dd",price:564,is_new:true,tags:['11','22'],pub_time:new Date(),test:{sort:1,subname:'122'}})
  let rs=await book.save()
  console.log(rs)
  //關閉db connect 一般不會關
  mongoose.disconnect()*/

  /******刪除文檔*/
  //創建文檔的結構對象
  ////約束文檔裡的屬性及類型
  let BookSchema = new mongoose.Schema({
    name: {
      type: String,
      require: true
    },
    author: String,
    price: Number,
    is_new: Boolean,
    tags: Array,
    pub_time: Date,
    test: mongoose.Schema.Types.Mixed
  })

  //創建模型對象 對文檔操作的封裝對象 可完成對文檔的curd動作
  //books集合名稱
  let BookModel = mongoose.model('books', BookSchema)
  //刪除一條數據
  let rs = await BookModel.deleteOne({ _id: '65fba7ef90f12d0511d4ef4b' })
  console.log(rs)
  //刪除多條
  // deleteMany

  /***更新文檔****/
  //更新一條
  //條件,更新欄位
  let updateRs = await BookModel.updateOne({ price: 564 }, { author: 'aaaa', price: 125 })
  console.log(updateRs)
  //更新多條
  //updateMany

  /**讀取文檔***/
  let rsFindOne = await BookModel.findOne({ price: 125 })
  console.log(rsFindOne)
  //findById 通過id 讀取
  //多條 find

  /****條件控制***/
  //運算符
  //mongodb不能使用< > >= <= 
  //> $gt  < $lt >= $gtn <= $ltn != $ne
  //let rs1=await BookModel.find({price:{$gt:500}})
  //let rs2=await BookModel.find({price:{$lt:500,$gt:966}})

  //邏輯運算
  //or  and
  let rs3 = await BookModel.find({ $or: [{ name: 'qq' }, { author: 'bb' }] })
  let rs4 = await BookModel.find({ $and: [{ price: { $lt: 900 } }, { price: { $gt: 100 } }] })
  //正則匹配
  let rs5 = await BookModel.find({ name: /q/ })
  let myName = 'dd'
  let rs6 = await BookModel.find({ name: new RegExp(myName) })//要匹配的是變數 就要用這個

  /********個性化讀取***/
  //字段篩選
  // 0 不要的字段 1 要的字段
  let rs7 = await BookModel.find().select({ _id: 0, name: 1 }).exec()


  //數據排序
  //1升2降
  let rs8 = await BookModel.find().select({ name: 1 }).sort({ name: 1 }).exec()
  console.log(rs8)

  //數據擷取
  //skip 略過 limit 取幾條
  let rs9 = await BookModel.find().skip(10).limit(10).select({ _id: 0, name: 1 }).sort({ name: 1 }).exec()





})

mongoose.connection.on('error', (err) => {
  console.log(`connect error:${err}`)
})

mongoose.connection.on('close', () => {
  console.log('connect close')
})

//setTimeout(()=>{mongoose.disconnect()},3000)