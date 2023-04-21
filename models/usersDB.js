const mongoose = require('mongoose')

mongoose
   .connect('mongodb://127.0.0.1:27017/inventory')
   .catch(err => console.log(err.message))

const userSchema = new mongoose.Schema({
   name: {
      type: String,
      required: true,
   },
   email: {
      type: String,
      required: true,
   },
   password: {
      type: String,
      required: true,
   },
})

const userModel = mongoose.model('user', userSchema)
module.exports = userModel