import logger from '../models/logger.mjs'

export const redirectPageNotExist = (req, res, next) => {
    logger.error(`NOT EXIST: ${req.method} ${req.protocol}://${req.hostname}${req.path} - ${req.ip}`)
    res.redirect('/')
    next()
}