import path from 'path'

export const showMainPage = (req, res) => {
    const mainPagePath = path.resolve(path.resolve(), 'static', 'index.html')
    res.sendFile(mainPagePath)
}