 var actividadService = require('./../Services/actividadService.js');

var ActividadController = function() {

	this.getActividad = function(req, res) {		
		res.json(actividadService.findActividadesByUsuario(1));
	};
}

module.exports = new ActividadController();