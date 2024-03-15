/*******ejs */
//用來分離介面與業務邏輯 html 與 nodejs
//1.安裝ejs npm i ejs
//2.導入ejs
const ejs = require('ejs')
//3.用ejs渲染
let name = '小明'
//render會對內容作解析 會找標示 把標示內的內容 替換成數據
let result = ejs.render('hello <%= username %>', { username: name })
console.log(result)

const express = require('express')
const app = express()

app.get('/admin', (req, res) => {
    res.send('admin')
})

app.listen(3000, () => {
    console.log('服務啟動 3000 ')
})






