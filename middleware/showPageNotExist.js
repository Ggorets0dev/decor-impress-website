import logger from '../logger.js'
import path from 'path'
import * as fs from 'fs';

export const showPageNotExist = (req, res, next) => {
    const pageNotExistPath = path.resolve(path.resolve(), 'static', '404.html')
    const htmlPageContent = fs.readFileSync(pageNotExistPath, "utf8")

    res.status(404).send(htmlPageContent)
    logger.error(`NOT EXIST: ${req.method} ${req.protocol}://${req.hostname}${req.path} - ${req.ip}`)
    next()
}