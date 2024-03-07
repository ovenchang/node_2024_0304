/******靜態資源目錄與網站根目錄 */
const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer((req, res) => {

    //取得url路徑
    let { pathname } = new URL(`${req.headers['x-forwarded-proto'] || req.connection.encrypted ? 'https' : 'http'}://${req.headers.host}${req.url}`)


    //設定網站根目錄 可以自已設定根目錄
    let root = `${__dirname}/abc`

    //拼接靜態資源路徑
    let filePath = `${root}${pathname}`

    //設置mime類型 表示資源的類型
    //text/html [type]/subtype]
    //根據副檔名 設定相對應的mime
    let ext = path.extname(filePath).slice(1)

    //取得靜態資源
    fs.readFile(filePath, (err, data) => {
        if (err) {
            console.log(err.message)
            return
        }
        res.end(data)
    })

})

server.listen(8080, () => {
    console.log('啟動服務')
})