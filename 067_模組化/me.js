/*******模組化 */
//每個文化就是一個模組
//模組內的數據是私有的 但可以露出給其他模組使用

/*******require 導入模組 */
//自訂的模組 寫相對路徑 且不能省略路徑 ./  ../ 之類的
//js  json 可以不寫 同名的話 先載入js
//導入其他類型文件 會以js處理

/******注意事項
1.module.exports 可以暴露數據任何數據
module.exports=123
module.exports='ddd'
module.exports=[1,2,3]
module.exports=function(){}
2.不能使用exports=value形式暴露

exports=module.exports={}
require 載入時的返回結果 是返回module.exports的值 不是exports的值
***********/

/***me 模組 */

function timeo() {
    console.log('timeo')
}

function koko() {
    console.log('koko')
}

/**暴露數據 方法一
module.exports = { //exports 此時是屬性
    timeo,
    koko
}
*/
//exports 暴露數據 方法二 exports此時是變數
exports.timeo=timeo
exports.koko=koko