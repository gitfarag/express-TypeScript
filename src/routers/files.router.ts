import { Router } from 'express'
import { validateGetFileByName } from '../utils/validators/files.validator'
import { getFileByName } from '../controllers/files.controller'


const filesRouter = Router()

/**
 * @description Get file by name
 * @route GET /files/:name
 * @access Public
 */
filesRouter.get(
    '/:name', // ? url
    validateGetFileByName, // ! validation middleware
    getFileByName // * controller
)

filesRouter.post('/', (req, res) => {
    res.send('Hello World!')
})

export default filesRouter