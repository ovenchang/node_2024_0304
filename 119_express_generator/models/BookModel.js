const mongoose = require('mongoose')
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

//暴露模型對象
module.exports = BookModel;