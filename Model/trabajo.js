var trabajoRepository = require('./../Repositories/trabajoRepository.js');

 var Trabajo = function() {
    self = this;
    this.id = null;
    this.id_actividad = null;
    this.username = null;
    this.fecha = null;
    this.horas = null;
    this.descripcion = null;

    this.load = function(username,id_actividad,fecha,horas,descripcion) {
    	
    	
		self.id_actividad = id_actividad;
		self.username = username;
	    self.fecha = fecha;
        self.horas = horas;
        self.descripcion = descripcion;
    }

    this.save = function(callback){

        trabajoRepository.save(self,callback);
    }

}
module.exports = Trabajo;