import path from 'path'
import logger from '../logger.js'

export const sendPriceList = (req, res) => {
    const priceListPath = path.resolve(path.resolve(), 'static', 'download', 'Актуальные цены Valpaint.pdf')
    res.download(priceListPath)
    logger.info(`Price list is downloaded from the IP address ${req.ip}`)
}