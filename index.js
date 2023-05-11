import express from 'express'
import * as dotenv from 'dotenv'
import path from 'path'

dotenv.config()
const PORT = process.env.PORT ?? 3000
const MAIN_PAGE_PATH = path.resolve(path.resolve(), 'static', 'index.html')

const app = express()

app.get('/', (req, res) => {
    res.sendFile(MAIN_PAGE_PATH)
})

app.listen(PORT, () => {
    console.log(`Server has been started on port ${PORT}`)
})