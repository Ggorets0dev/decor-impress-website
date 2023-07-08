import { Router } from 'express'
import { sendPriceList } from '../controllers/download.mjs'

const router = Router()

router.get('/download', sendPriceList)

export default router