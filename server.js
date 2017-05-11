/*-----------------------------------------------------------------------------

Author: Natanael Sanchez Melchor.

Description: This is a mini project for applying to a job position
			  at Sokratomanagement.com.

Date Started: 2016-09-26

Date Updated: 2016-09-30

Programming Language: NODEJS / EXPRESS JS / JAVASCRIPT

------------------------------------------------------------------------------*/

//Inicializar el servidor Express
var express = require('express');
var app = express();


app.get('/', function (req, res){

	res.send('Hello World Node From Heroku');
});


//Puerto de conexion del Servidor
app.listen(3000, function(){
	console.log('Listening on port: 3000');
});

