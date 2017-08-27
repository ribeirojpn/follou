import tracks from './tracks'

export default function (app) {
  app.route('/api/tracks/:id')
    .get(tracks.getTrackById)
    // .put(checkToken, tracks.updateTrack)
    // .delete(checkToken, tracks.deleteTrack)
    // .post(checkToken, tracks.saveTrack)
}