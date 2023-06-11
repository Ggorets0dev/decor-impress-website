import express from 'express'
import * as dotenv from 'dotenv'
import downloadRoutes from './routes/download.js'
import logger from './logger.js'
import { accessRequestLog, errorRequestLog } from './middleware/logRequests.js'
import { showPageNotExist } from './middleware/showPageNotExist.js'

dotenv.config()
const PORT = process.env.PORT ?? 3000

const app = express()

app.use(accessRequestLog)

app.use(express.static('static'))
app.use(downloadRoutes)
app.use(showPageNotExist)

app.use(errorRequestLog)

app.listen(PORT, () => {
    logger.info(`Server successfully runs on the port ${PORT}`)
})