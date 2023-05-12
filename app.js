import express from 'express'
import * as dotenv from 'dotenv'
import indexRoutes from './routes/index.js'
import downloadRoutes from './routes/download.js'
import logger from './logger.js'
import * as expressWinston from 'express-winston'

dotenv.config()
const PORT = process.env.PORT ?? 3000

const app = express()

app.use(expressWinston.logger({
    winstonInstance: logger,
    statusLevels: true
}))

app.use(indexRoutes)
app.use(downloadRoutes)

app.listen(PORT, () => {
    logger.info(`Server successfully runs on the port ${PORT}`)
})