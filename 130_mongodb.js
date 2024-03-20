/*****mongodb**/
//核心
//數據庫database 是數據倉庫 數據庫服務下可以創建許多數據庫 數據庫中可以有很多集合
//集合collection 類似js中的陣列 可以存放許多文檔
//文檔 document 數據庫中最小單位 類似js中的物件

//例如一個json文件就是一個數據庫
數據庫裡
{
    user:[ //集合
        {name:"lee",age:10}, //文檔 文檔中的屬性有時也稱為字段
        {name:"lee",age:10}
    ]
}
另一個數據庫
{
....
}

一般情況下  一個項目使用一個數據庫
一個集合會存儲同一類型的數據


//MongoDB Atlas (免費)雲端託管服務
https://ithelp.ithome.com.tw/articles/10268405


ovenchang/aSFPmHAwMHpJsvK4

/*****mongoose */
對象文檔模型庫

/**
 * const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://ovenchang:aSFPmHAwMHpJsvK4@cluster0.0qefrll.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
 */