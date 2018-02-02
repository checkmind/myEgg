module.exports = app => {
  const mongoose = app.mongoose
  const ApiSchema = mongoose.Schema({
			username :  { type : String ,required :  true, unique:true },
			password :  { type : String ,required :  true,unique:false },
			friend : [{
				username : String 
			}],
			pptIds : []
	})
  return mongoose.model('duhaos', ApiSchema)
}
