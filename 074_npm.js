/******包管理工具 */
//管理package的軟體 可對package進行 download install update delete upload 等動作

const { listeners } = require('npm')

/*** npm  node package manager ****/
npm -v 版本號

/****** 初始化 package***/
npm init 
npm init -y 快速創建
會產生一個package.json
package.json package 的配置文件 每個package都要有

/****** 下載package***/
npm i math
下載完math後 math就是當前這個package的依賴包
比如 A 引入 B 就說  B是A的依賴包 A依賴B

module package 存放目錄
package.json
package-lock.json 固定package版本訊息 確保這次安裝與下次安裝版本一致

/*****require 導入npm 包的流程 */
1.會找當前入目下modules夾裡的同名文件夾
require('math')
require('./node_modules/math')
require('./node_modules/math/index.js')

2.找上級入目下modules夾裡的同名文件夾，直到磁碟根目錄

/*********生產依賴與開發依賴* */
安裝時可區分
生產依賴 npm -S jquery 在生產與開發都使用
開發依賴 npm -D less   在開發使用

在package.json裡 存放位置不一樣
dependencies": {
    "jquery": "^3.7.1",
  },
  "devDependencies": {
    "less": "^4.2.0"
  }






