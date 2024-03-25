const { dbUrl } = require('../config/dbConfig')
//success數據庫連接成功的callback
//error數據庫連接失敗的callback
module.exports = function (success, error) {
    if (typeof error !== 'function') {
        error = function () { console.log('連接失敗') }
    }
    const mongoose = require("mongoose")
    mongoose.connect(`${dbUrl}`)

    mongoose.connection.once('open', async () => {
        console.log('connect success')
        success()
    })


    mongoose.connection.on('error', (err) => {
        console.log(`connect error:${err}`)
        error()
    })

    mongoose.connection.on('close', () => {
        console.log('connect close')
    })
}