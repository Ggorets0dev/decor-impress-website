import express from 'express'
import * as dotenv from 'dotenv'
import path from 'path'

dotenv.config()

const __dirname = path.resolve()
const PORT = process.env.PORT ?? 3000
const MAIN_PAGE_PATH = path.resolve(__dirname, 'static', 'index.html')
const PRICE_LIST_PATH = path.resolve(__dirname, 'download', 'Актуальные цены Valpaint.pdf')

const app = express()

app.get('/', (req, res) => {
    res.sendFile(MAIN_PAGE_PATH)
})

app.get('/download', (req, res) => {
    res.download(PRICE_LIST_PATH)
})

app.listen(PORT, () => {
    console.log(`Server has been started on port ${PORT}`)
})