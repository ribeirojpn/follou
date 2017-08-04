require('dotenv').config()
import request from 'request'
import async from 'async'
import { AllHtmlEntities as Entities } from 'html-entities'
const entities = new Entities()

export default function getLyrics (data, callback) {
  let tracksWithLyrics = []

  async.each(data, (track, call) => {
    if (!track.idGenius) {
      let nameFiltered = track.name.split(/’|'|\(.*\)|-.*/ig).join(' ')
      request.get(`https://api.genius.com/search?q=${entities.encode(nameFiltered) + '%20' + track.artists[0].name}`,
        {
          'headers': {
            'Authorization': 'Bearer ' + process.env.GENIUS_ACCESS_TOKEN
          }
        },
        function (error, response, body) {
          if (error) {
            return
          }
          try {
            track.lyric_url = JSON.parse(body).response.hits[0].result.url
          } catch (erro) {
            console.log(nameFiltered, erro)
            track.lyric_url = 'lyric-not-found'
          }
          tracksWithLyrics.push(track)
          call()
        }
      )
    }
  }, (erro) => {
    if (erro) callback(erro, null)
    callback(null, tracksWithLyrics)
  })
}
