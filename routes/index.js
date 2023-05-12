import { Router } from 'express'
import { showMainPage } from '../controllers/index.js'

const router = Router()

router.get('/', showMainPage)

export default router