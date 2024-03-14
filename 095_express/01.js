/*******express */
//基於nodejs的web應用框架 封裝許多功能 便於開發web功能(http service)
//安裝express
//npm i express

//1.導入express
const express = require('express')
const fs = require('fs')
const { format } = require('date-fns');
const bodyParser = require('body-parser')
const { singers } = require("./singers") //載入靜態文件

//2.創建應用對象
const app = express()

/***********中間件*********** */
//中間件 本質是一個callback
//中間件函數可以像路由一樣訪問req res
//可以封裝操作 簡化代碼
//有全局 與 路由 中間件  與 靜態資源目錄 中件間
//1.全局 只要有請求 就會執行 執行完後 才會去執行路由
//2.路由 滿足某個路由 對應的中間件 才會執行
//3.靜態資源目錄 中件間

//全局中間件 紀錄ip
//next 指向後續的路由callback 或是後續的中間件callback
let recordMiddle = (req, res, next) => {
    let { url, ip } = req
    fs.appendFileSync(__dirname + '/record.txt', format(new Date(), "yyyy-MM-dd HH:mm:ss") + `-${url}-${ip} \r\n`)
    //調用next
    next()
}
//使用全局中間件
app.use(recordMiddle)

//路由中間件 針對/admin /setting的請求 要求url 攜帶code=521參數 如沒攜帶則提示[暗號錯誤]
var routeMiddle = (req, res, next) => {
    let code = req.query.code
    if (code != '521') {
        res.send('暗號錯誤')
        return
    }
    next()
}
//使用路由中間件
app.get('/admin', routeMiddle, (req, res) => {
    res.send('admin')
})

//靜態資源 中間件
//靜態資源目錄(網站根目錄)
//當瀏覽器把請求發送到server server到哪個目錄去找對應的文件 那個文件夾就叫靜態資源目錄
//設置 靜態資源目錄
//__dirname+'/public' 靜態資源文件夾的路徑
//這文件下的 會自動加mime
//注意事項
//1. index.html為默認打開的文件
//2.靜態資源與路由規則同時匹配，誰先匹配就response
//3.路由一般response動態資源，靜態資源 中間件response靜態資源
app.use(express.static(__dirname + '/public')) //express.static()返回函數(中間件函數) 

/***************************** */

//3.創建路由
//確定了應用程序如何response客戶端特定端點的請求
//由 請求方法 路徑 callback組成
//get post all

app.get('/singer/:id.html', (req, res) => {

    /*****獲取請求參數****/
    console.log(req.method)
    console.log(req.url)
    console.log(req.httpVersion)
    console.log(req.headers)
    //express 封裝的操作
    console.log(req.path) //url pathname
    console.log(req.query)
    console.log(req.ip)
    //  獲取某個header值
    console.log(req.get('connection'))

    /**** express 設置response */
    res.status(200)
    res.set('aaa', 'bbb') //設置header
    //res.send('你好')
    //res.redirect("http://www.aa.com")// 跳轉 response
    //res.download(__dirname+'/singers.json')//下載 response
    //res.json({name:"12"}) //json response
    //res.sendFile(__dirname+'/01.html') //response 取得文件內容
    return

    /*****獲取路由參數****/
    //url中的參數(數據)
    //req.params 存儲路由所有參數
    let id = req.params.id
    let singer = singers.find((ele) => { return ele.id == Number(id) })
    if (!singer) {
        res.send('not found')
        return
    }

    res.send('name:' + singer.name)
})

/******express獲取request body  body-parser*** */
//body-parser也是中間件
//npm i 
//設置為路由中間件
// 建立 application/json 解析器
const jsonParser = bodyParser.json()
// 建立 application/x-www-form-urlencoded 解析器
const urlencodedParser = bodyParser.urlencoded({ extended: false })

//加入中間件 會在req裡加上body屬性
app.post('/login', urlencodedParser, (req, res) => {
    console.log('req.body',req.body)
    res.send(`name:${req.body.username} password:${req.body.password}`)
})
app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/public/login.html')
})
/******************************** */



app.get('/', (req, res) => {

    res.send('首頁')
})

app.all('*', (req, res) => {
    res.send('404')
})

//4.監聽端口 啟動服務
app.listen(3000, () => {
    console.log('服務啟動 3000 ')
})








