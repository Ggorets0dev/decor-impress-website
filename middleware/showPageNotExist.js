import logger from '../logger.js'
import path from 'path'

export const showPageNotExist = (req, res, next) => {
    logger.error(`NOT EXIST: ${req.method} ${req.protocol}://${req.hostname}${req.path} - ${req.ip}`)
    res.redirect('/')
    next()
}