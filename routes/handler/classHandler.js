const Class = require('../../models/classSchema');

const addNewClass = function(req,res){	
	const body = req.body;
	Class.find({name:`/^aes/`},(err,docs)=>{
		console.log(err);
		res.send('class already exist');
		return null;
	})
	const newClass = new Class({
		name: 'test',
		quotes: [{author:'novel',quote:'haloo'}]
	});
	newClass.save()
			.then((result) =>{
				res.send(result)
			})
			.catch((err) =>{
				console.log(err);
			})
}

module.exports = {addNewClass};