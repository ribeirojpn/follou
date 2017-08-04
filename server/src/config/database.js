import mongoose from 'mongoose'

export default function (uri) {
  mongoose.Promise = global.Promise
  if (process.env.NODE_ENV === 'test') {
    mongoose.connect(uri + '-test', function () {
      mongoose.connection.db.dropDatabase(function () {
        console.log('Cleaning the database')
      })
    })
  } else {
    mongoose.connect(uri)
    mongoose.set('debug', true)

    mongoose.connection.on('connected', function () {
      console.log('Connected')
    })

    mongoose.connection.on('disconnected', function () {
      console.log('Disconnected')
    })

    mongoose.connection.on('erro', function (erro) {
      console.log('ERRO: ' + erro)
    })

    process.on('SIGINT', function () {
      mongoose.connection.close(function () {
        console.log('Aplicação Finalizada')
        process.exit(0)
      })
    })
  }
}
