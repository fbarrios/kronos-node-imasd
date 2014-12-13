var Actividad = require('./../Model/actividad.js');
var actividadRepository = require('./../Repositories/actividadRepository.js');

var ActividadService = function(){
	this.findActividadesByUsuario = function (username, callback) {		
		 actividadRepository.findActividadesByUsuario(username, function(err, recordset) {
		 	var actividades = Array();
			recordset.forEach(function(data) {
				var actividad = new Actividad();
				actividad.fillFromRecord(data);
				actividades.push(actividad);
			});

			callback(err, actividades);
		 });
	}
}

module.exports =  new ActividadService();