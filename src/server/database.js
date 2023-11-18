const mongoose = require('mongoose');
const { Schema } = require('mongoose');


mongoose.connect('mongodb://localhost/ecommerce', { useNewUrlParser: true, useUnifiedTopology: true });



const userSchema = new Schema({
  username:{
    type: String,
    required:true
   },
   email:{
    type: String,
    required:true
   },
   password:{
    type: String,
    required:true
   }
});


module.exports = mongoose.model('user',userSchema);
  