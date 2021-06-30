const express = require('express');
const classVariable = require('./routes/class');
const {mongoose} = require('./DbConnection');

const app = express();
const port = 3000;

app.use(express.json());

// Class routes
app.use('/class',classVariable);


app.listen(port, () =>{
	console.log(`http://localhost:${port}`);
});
