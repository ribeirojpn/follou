import request from 'request'

export default function checkFollower (playlistCheckData, callback) {
  request.get(`https://api.spotify.com/v1/users/${playlistCheckData.user_id}/playlists/${playlistCheckData.playlist_id}/followers/contains?ids=${playlistCheckData.follower_id}`,
    {
      'auth': {
        'bearer': playlistCheckData.token
      }
    },
    function (error, response, body) {
      if (error) {
        callback(error, null)
        return
      }
      let isFollower = JSON.parse(body)[0]
      callback(null, isFollower)
    }
  )
}
