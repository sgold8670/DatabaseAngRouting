 // app/models/todo.js

    // load mongoose since we need it to define a model
    var mongoose = require('mongoose');
	
	 //loads data from the routes.js file
	 module.exports = mongoose.model('Todo', {
        text : String,
     });
	 
	