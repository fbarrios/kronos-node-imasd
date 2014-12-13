var Trabajo = require('./../Model/trabajo.js');


var TrabajoService = function(){
	this.createTrabajo = function (username,id_actividad,fecha,horas,descripcion, serviceCallback) {		

	var trabajo = new Trabajo();
	trabajo.load(username,id_actividad,fecha,horas,descripcion);
	trabajo.save(serviceCallback);

	}
}

module.exports =  new TrabajoService();