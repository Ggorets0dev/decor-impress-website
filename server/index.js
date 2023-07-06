import express from 'express'
import * as dotenv from 'dotenv'
import * as path from 'path'
import downloadRouter from './routes/download.js'
import logger from './models/logger.js'
import { accessRequestLog, errorRequestLog } from './middlewares/logRequests.js'

dotenv.config()
const PORT = process.env.PORT ?? 3000
const __dirname = path.resolve()
const STATIC_PATH = path.resolve(__dirname, 'client', 'build')

const app = express()

app.use(accessRequestLog)

app.use(express.static(STATIC_PATH))
app.use('/download', downloadRouter)

app.use(errorRequestLog)

app.listen(PORT, () => {
    logger.info(`Server successfully runs on the port ${PORT}`)
})