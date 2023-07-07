import express from 'express'
import * as dotenv from 'dotenv'
import * as path from 'path'
import downloadRouter from './routes/download.js'
import logger from './models/logger.js'
import { accessRequestLog, errorRequestLog } from './middlewares/logRequests.js'
import { redirectPageNotExist } from './middlewares/redirectPageNotExist.js'

dotenv.config()

const PORT = process.env.PORT ?? 3000
const STATIC_PATH = path.resolve(path.resolve(), 'client', 'build')

const app = express()

app.use(accessRequestLog)

app.get('/download', downloadRouter)
app.use(express.static(STATIC_PATH))
app.use(redirectPageNotExist)

app.use(errorRequestLog)

app.listen(PORT, () => {
    logger.info(`Server successfully runs on the port ${PORT}`)
})