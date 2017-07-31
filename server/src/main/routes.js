import path from 'path'

export default function (app) {
  app.get('/', function (req, res) {
    res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'))
  })
}
