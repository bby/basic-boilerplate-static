var $ = require('sizzle'); // src/component to include specific functionality
var foo = $('h1');
foo[0].onclick = function() {
	this.style.backgroundColor = 'red';
}