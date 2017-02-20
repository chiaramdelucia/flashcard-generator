var fs = require ('fs');

//Basic Card Constructor
var BasicCard = function (front, back) {
	this.front = front;
	this.back = back;
}

BasicCard.prototype.append = function() {
	
	fs.appendFile('basiccards.js', JSON.stringify(this), function(err, data) {
			if (err) throw err;
		console.log('The "data to append" was appended to file!');
	});
};


var userCard = new BasicCard(process.argv[2], process.argv[3]);

userCard.append();


//ClozeCard Constructor

