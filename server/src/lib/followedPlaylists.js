import request from 'request'
import async from 'async'

function getFollowedPlaylists (data, callback) {
  let following = []

  async.each(data.playlists, (playlist, call) => {
    request.get(`https://api.spotify.com/v1/users/${data.user_id}/playlists/${playlist.id}/followers/contains?ids=${data.follower_id}`,
      {
        'auth': {
          'bearer': data.token
        }
      },
      function (error, response, body) {
        if (error) {
          return
        }
        let isFollower = JSON.parse(body)[0]
        if (isFollower) {
          following.push(playlist)
        }
        call()
      }
    )
  }, (erro) => {
    if (erro) callback(erro, null)
    callback(null, following)
  })
}

export default getFollowedPlaylists
