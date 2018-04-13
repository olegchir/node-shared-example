const express = require('express')
const app = express()

var include = function(filename) {
	var fs = require('fs');
	var vm = require('vm');
	var includeInThisContext = function(path) {
	var code = fs.readFileSync(path);
	vm.runInThisContext(code, path); }.bind(this); includeInThisContext(__dirname+"/"+filename);
}

app.get('/', (req, res) => {
	var id = req.query.id;
	res.send(validate(id));
})

app.listen(3000, () => {
	include("shared.js");
})