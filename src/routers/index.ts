import { Router } from 'express'
import filesRouter from './files.router'


const router = Router()

router.use('/files', filesRouter)


export default router