import path from 'path'

export const sendPriceList = (req, res) => {
    const PRICES_PATH = path.resolve(path.resolve(), 'server', 'download', 'Актуальные цены на продукцию Valpaint.pdf')
    res.status(200).download(PRICES_PATH)
}