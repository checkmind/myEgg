module.exports = app => {
  const mongoose = app.mongoose
  const Schema = mongoose.Schema
  
  const ApiSchema = mongoose.Schema({
		pptName : { type : String ,required :  true },
		pptCreateDate : Date,
		pptLastAlterDate : Date,
		public : Boolean,
		psWord : String,
		sectionObj : [Schema.Types.Mixed]
	})

  return mongoose.model('pptarrs', ApiSchema)
}
