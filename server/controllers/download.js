import path from 'path'

export const sendPriceList = (req, res) => {
    const PRICES_PATH = path.resolve(__dirname, 'server', 'download', 'Актуальные цены Valpaint.pdf')
    res.status(200).download(PRICES_PATH)
}