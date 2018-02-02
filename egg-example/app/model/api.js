module.exports = app => {
  const mongoose = app.mongoose
  const ApiSchema = mongoose.Schema({
    username: {
      type: String,
      unique: false
    }
  })

  return mongoose.model('Api', ApiSchema)
}
