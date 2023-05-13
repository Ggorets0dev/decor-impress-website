import path from 'path'
import logger from '../logger.js'

export const showMainPage = (req, res) => {
    const mainPagePath = path.resolve(path.resolve(), 'static', 'index.html')
    res.status(200).sendFile(mainPagePath)
    logger.info(`Main page is opened from the IP address ${req.ip}`)
}