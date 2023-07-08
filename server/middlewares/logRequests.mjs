import logger from '../models/logger.mjs'

export const accessRequestLog = (req, res, next) => {
    logger.info(`REQUEST: ${req.method} ${req.protocol}://${req.hostname}${req.path} - ${req.ip}`)
    next()
}

export const errorRequestLog = (err, req, res, next) => {
    logger.error(`ERROR: ${req.method} ${req.protocol}://${req.hostname}${req.path} - ${err}`)
    next()
}