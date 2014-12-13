

 var Actividad = function() {
    this.id = null;
    this.proyecto = null;
    this.modulo = null;
    this.nombre = null;

    this.fillFromRecord = function(data) {
    	console.log(data);

    	this.id = data.id;
		this.proyecto = data.proyecto;
		this.modulo = data.modulo;
		this.nombre = data.nombre;
    }
}
module.exports = Actividad;