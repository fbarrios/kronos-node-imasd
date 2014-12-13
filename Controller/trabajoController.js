var trabajoService = require('./../Services/trabajoService.js');

var TrabajoController = function() {

	this.crearTrabajo = function(req, res) {	
		var strftime = require('strftime');
		var fecha = strftime('%F %T', new Date());
		var horas = req.body.horas;
		var descripcion = req.body.descripcion;
		trabajoService.createTrabajo(req.params.username,req.params.id_actividad,fecha,horas,descripcion,function(err, recordset) {
			if(err) {
				console.log('error');
				//res.end();
			}
			res.json(recordset);
		});


	};
}

module.exports = new TrabajoController();