require('dotenv').config()
import request from 'request'
import async from 'async'

export default function getLyrics (data, callback) {
  let tracksWithLyrics = []

  async.each(data, (track, call) => {
    if (!track.idGenius) {
      let nameFiltered = track.name.split(/\(.*\)/ig).join(' ')
      request.get(`https://api.genius.com/search?q=${nameFiltered + '%20' + track.artists[0].name}`,
        {
          'headers': {
            'Authorization': 'Bearer ' + process.env.GENIUS_ACCESS_TOKEN
          }
        },
        function (error, response, body) {
          if (error) {
            console.log(error)
            return
          }
          console.log(nameFiltered + '%20' + track.artists[0].name, body)
          try {
            track.lyric_url = JSON.parse(body).response.hits[0].result.url
          } catch (erro) {
            console.log('lyric not found')
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
