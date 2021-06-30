const {uri} = require('./env')

const mongoose = require('mongoose');

mongoose.connect(uri,{ useNewUrlParser: true, useUnifiedTopology: true },()=>{
	console.log("data base connected");
});

module.exports = {mongoose};
