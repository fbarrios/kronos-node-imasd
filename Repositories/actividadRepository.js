var Actividad = require('./../Model/actividad.js');

var ActividadRepository = function() {

		this.findActividadesByUsuario =  function (username) {

			var actividades = [];

			var act = new Actividad();
			act.id = 1;
			act.proyecto = "prueba";
			act.modulo = "pueba";
			act.nombre = "actividad";

			var act2 = new Actividad();
			act2.id = 1;
			act2.proyecto = "prueba";
			act2.modulo = "pueba";
			act2.nombre = "actividad";

			actividades.push(act);
			actividades.push(act2);

		return actividades;
	}
}

module.exports = new  ActividadRepository();