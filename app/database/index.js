'use strict';

var config 		= require('../config');
var Mongoose 	= require('mongoose');
var logger 		= require('../logger');

// Connect to the database
// construct the database URI and encode username and password.
// var dbURI = "mongodb://" + 
// 			encodeURIComponent(config.db.username) + ":" + 
// 			encodeURIComponent(config.db.password) + "@" + 
// 			config.db.host + ":" + 
// 			config.db.port + "/" + 
// 			config.db.name;
var dbURI = "mongodb://127.0.0.1:27017/ChatIo"
Mongoose.connect(dbURI, { useNewUrlParser: true });
console.log("DB conected 1!")
// Throw an error if the connection fails
Mongoose.connection.on('error', function(err) {
	if(err) throw err;
});
console.log("DB conected 2!")
// mpromise (mongoose's default promise library) is deprecated, 
// Plug-in your own promise library instead.
// Use native promises
Mongoose.Promise = global.Promise;

module.exports = { Mongoose, 
	models: {
		user: require('./schemas/user.js'),
		room: require('./schemas/room.js')
	}
};
