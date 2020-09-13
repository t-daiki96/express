import express from 'express'
import { router } from './models/route/v1'

const app: express.Express = express()

const port = process.env.PORT || 3000

// CORSの許可
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

// body-parserに基づいた着信リクエストの解析
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// ルーティング
app.use('/api/v1/', router)

// 3000番ポートでAPIサーバ起動
app.listen(port, () => { console.log(`listen on port ${port}`) })
