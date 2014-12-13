var actividadService = require('./../Services/actividadService.js');

var ActividadController = function() {

	this.getActividad = function(req, res) {	
		actividadService.findActividadesByUsuario(req.params.username , function(err, recordset) {
			if(err) {
				console.log('error');
				//res.end();
			}

			res.json(recordset);
		});
	};
}

module.exports = new ActividadController();