var actividadService = require('./../Services/actividadService.js');

var ActividadController = function() {

	this.getActividad = function(req, res) {	
		actividadService.findActividadesByUsuario(1, function(err, recordset) {
			if(err) {
				console.log('error');
				//res.end();
			}

			res.json(recordset);
		});
	};
}

module.exports = new ActividadController();