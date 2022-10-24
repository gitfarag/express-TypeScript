import fs from 'fs'
import path from 'path'

const getFileByNameService = (name: string): Buffer => {
    const fileBath = path.join(__dirname, '..', '..', 'storage')
    const file = fs.readFileSync(`${fileBath}/${name}`)
    return file
}

export { getFileByNameService }