/*******express */
//基於nodejs的web應用框架 封裝許多功能 便於開發web功能(http service)
//安裝express
//npm i express

//1.導入express
const express= require('express')

//2.創建應用對象
const app=express()

//3.創建路由
//確定了應用程序如何response客戶端特定端點的請求
//由 請求方法 路徑 callback組成
//get post all
app.get('/home',(req,res)=>{
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

    res.end('home')
})
app.get('/prod/:id.html',(req,res)=>{
    /*****獲取路由參數****/
    //url中的參數(數據)
    //req.params 存儲路由所有參數
    let id=req.params.id
    res.end('prod:'+id)
})

app.get('/',(req,res)=>{
    res.end('首頁')
})
app.post('/login',(req,res)=>{
    res.end('login')
})
app.all('*',(req,res)=>{
    res.end('404')
})

//4.監聽端口 啟動服務
app.listen(3000,()=>{
    console.log('服務啟動 3000 ')
})


