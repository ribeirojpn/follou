import request from 'request'
import async from 'async'
import { AllHtmlEntities as Entities } from 'html-entities'
import redisClient from './../config/redis'
const entities = new Entities()

// check this with websockets
function getLyrics (data, callback) {
  let tracksWithLyrics = []

  async.each(data, (track, call) => {
    redisClient.exists(track.id, function (err, reply) {
      if (err) return
      if (reply === 0) {
        let nameFiltered = track.name.split(/’|'|\(feat.*\)|\(Remix.*\)|\(Ori.*\)|\(remix.*\)|\(Remix.*\)|\(.*emix\)|-.*/ig).join(' ')
        request.get(`https://api.genius.com/search?q=${entities.encode(nameFiltered) + '%20' + track.artists[0].name}`,
          {
            'headers': {
              'Authorization': 'Bearer ' + process.env.GENIUS_ACCESS_TOKEN
            }
          },
          function (error, response, body) {
            if (error) {
              track.lyric_url = 'lyric-not-found'
            }
            try {
              let hits = JSON.parse(body).response.hits
              for (let i = 0; i < hits.length; i++) {
                if (hits[i].result.url.endsWith('lyrics')) {
                  track.lyric_url = hits[i].result.url
                  break
                }
              }
              if (!track.lyric_url) {
                track.lyric_url = 'lyric-not-found'
              }
            } catch (erro) {
              console.log(nameFiltered, erro)
              track.lyric_url = 'lyric-not-found'
            }
            // salva no redis com key = spotifyId e value = genius url
            redisClient.set(track.id, track.lyric_url, console.log(track.lyric_url, 'saved'))
            tracksWithLyrics.push(track)
            call()
          }
        )
      } else {
        redisClient.get(track.id, function (erro, res) {
          if (erro) {
            redisClient.del(track.id)
            track.lyric_url = 'lyric-not-found'
          } else {
            track.lyric_url = res
          }
          tracksWithLyrics.push(track)
          call()
        })
      }
    })
  }, (erro) => {
    if (erro) callback(erro, null)
    callback(null, tracksWithLyrics)
  })
}

export default getLyrics
