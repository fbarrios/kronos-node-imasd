// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express'); 		// call express
var app        = express(); 				// define our app using express
var bodyParser = require('body-parser');

var actividadController = require('./Controller/actividadController.js');
var trabajoController = require('./Controller/trabajoController.js');


var bears = Array();

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080; 		// set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router(); 				// get an instance of the express Router

// middleware to use for all requests
router.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next(); // make sure we go to the next routes and don't stop here
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/usuario/:username/actividades', function(req, res) {
	actividadController.getActividad(req,res);
//	res.json({ message: 'hooray! welcome to our api! '+ req.params.username + ' ' + saludo});	
});


router.post('/usuario/:username/actividad/:id_actividad/trabajos', function(req, res) {
	trabajoController.crearTrabajo(req, res);


//	res.json({ message: 'hooray! welcome to our api! '+ req.params.username + ' ' + saludo});	
});





app.use('/api', router);

app.listen(port);
console.log('Magic happens on port ' + port);
