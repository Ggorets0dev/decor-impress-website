import express from 'express'
import * as dotenv from 'dotenv'
import indexRoutes from './routes/index.js'
import downloadRoutes from './routes/download.js'

dotenv.config()
const PORT = process.env.PORT ?? 3000

const app = express()

app.use(indexRoutes)
app.use(downloadRoutes)

app.listen(PORT, () => {
    console.log(`Server has been started on port ${PORT}`)
})