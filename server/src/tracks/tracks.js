import redisClient from './../config/redis'

let Controller = {}

Controller.getTrackById = function (req, res) {
  let id = req.params.id
  let track = {}
  redisClient.exists(id, function (err, reply) {
    if (err || reply === 0) {
      return res.status(404).json('Not found')
    }

    redisClient.get(id, function (erro, result) {
      if (erro) {
        return res.status(404).json('Not found')
      }
      track = {
        id,
        lyric_url: result
      }

      res.json(track)
    })
  })
}

export default Controller
