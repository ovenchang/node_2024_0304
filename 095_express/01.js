/*******express */
//基於nodejs的web應用框架 封裝許多功能 便於開發web功能(http service)
//安裝express
//npm i express

//1.導入express
const express= require('express')
//2.創建應用對象
const app=express()
//3.創建路由
app.get('/home',(req,res)=>{
    console.log(req)
    res.end(req.hostname)
})
//4.監聽端口 啟動服務
app.listen(3000,()=>{
    console.log('服務啟動 3000 ')
})


