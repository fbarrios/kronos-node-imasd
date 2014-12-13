var actividadRepository = require('./../Repositories/actividadRepository.js');

var ActividadService = function(){
	this.findActividadesByUsuario = function (username) {		
		 return actividadRepository.findActividadesByUsuario(username);
	}
}

module.exports =  new ActividadService();