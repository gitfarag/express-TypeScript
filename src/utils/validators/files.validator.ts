import { Request, Response, NextFunction } from 'express'
import fs from 'fs'
import path from 'path'

/**
 * @description Validated get file by name request
 * @param req :name
 * @param res 
 * @param next 
 * @returns 
 */
const validateGetFileByName = (req: Request, res: Response, next: NextFunction): any => {
    const { name } = req.params
    const fileBath = path.join(__dirname, '..', '..', '..', 'storage',`${name}`)
    
    const fileExists = fs.existsSync(fileBath)
    if (!fileExists)
    
        return res.status(404).send("File not found")

    next()
}

export { validateGetFileByName }