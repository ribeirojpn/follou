import mongoose from 'mongoose'
import findOrCreate from 'mongoose-findorcreate'

export default function () {
  let schema = mongoose.Schema({
    spotifyId: {
      type: String,
      required: true,
      index: {
        unique: true
      }
    },
    name: {
      type: String
    },
    photo: {
      type: String
    },
    email: {
      type: String,
      required: true,
      index: {
        unique: true
      }
    },
    playlists: [],
    bookmarked: []
  })
  schema.plugin(findOrCreate)
  return mongoose.model('User', schema)
}
