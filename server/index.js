import app from './app'

app.listen(app.get('port'), function () {
  console.log(`Server on. App listening on port ${app.get('port')}!`)
})
