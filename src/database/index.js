import mongoose from 'mongoose'
mongoose.set('useCreateIndex', true)
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true })

mongoose.Promise = global.Promise;

module.exports = mongoose;