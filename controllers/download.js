import path from 'path'

export const sendPriceList = (req, res) => {
    const priceListPath = path.resolve(path.resolve(), 'static', 'download', 'Актуальные цены Valpaint.pdf')
    res.download(priceListPath)
}