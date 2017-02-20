var fs = require ('fs');


//Basic Card Constructor
var BasicCard = function (front, back) {

	if (!(this instanceof BasicCard)) {
        return new BasicCard(front, back);
    }

	this.front = front;
	this.back = back;

	fs.appendFile('basiccards.js', JSON.stringify(this), function(err, data) {
			if (err) throw err;
		console.log('The data to append was appended to file!');

	});

}


var devCard1 = new BasicCard('What is the function factory called?', 'The constructor function.');
var devCard2 = new BasicCard('What is a keyword associated with constructor functions?', 'New');
var devCard3 = new BasicCard('What method is used to add on to a constructor functions object?', 'Prototype');


//ClozeCard Constructor

function ClozeCard(text, cloze) {

    if(!(this instanceof ClozeCard)) {
        return new ClozeCard(text, cloze);
    };

    this.text = text;
    this.cloze = cloze;

	fs.appendFile('cloze-card.js', JSON.stringify(this), function(err, data) {
			if (err) throw err;
	});
  
};



ClozeCard.prototype.createPartial = function() {
   return this.partial = (this.text).replace(this.cloze, " ... ");
};

ClozeCard.prototype.fulltext = function() {
    return this.text;
};

var clozeCard1 = new ClozeCard("A constructor is a function that can create reusable objects.", "constructor");

console.log(clozeCard1.createPartial());


console.log(clozeCard1.fulltext());

