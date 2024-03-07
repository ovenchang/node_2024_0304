/*******模組化 */
//每個文化就是一個模組
//模組內的數據是私有的 但可以露出給其他模組使用


//導入模組
const me =  require('./me')
const myJson=require('./hoo') //json
console.log(me.timeo())
console.log(myJson.a)






