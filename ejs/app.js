const express = require ('express'); 
const app = express(); 

app.get ("/", function (req,res) {
	res.render ( "helloworld.ejs" );	
	} );
app.listen(3000 , function () {
	console.log ("Le serveur est prêt");
} );
