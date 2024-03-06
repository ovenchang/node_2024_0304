const http = require('http')

//1.創建http物件
// req =>請求報文對象
// res =>回應報文對象 可以用來設置 回應的 header body
// callback 在接收http 請求時執行
const server = http.createServer((req,res)=>{

  res.setHeader("content-type","text/html;charset=utf-8")
  
  res.end(`<html><body>
  <form action="https://node20240304-en4z--80--c9a8a620.local-credentialless.webcontainer.io" method="post">
  <input type="text" name="username" value="55555">
  <input type="submit" value="submit">
  </form></html></body>
  `)//設置回應body 並結束response
})

//2.監聽port 啟動服務
//callback 啟動服務時執行
server.listen(8080,()=>{
  console.log('啟動服務')
})









