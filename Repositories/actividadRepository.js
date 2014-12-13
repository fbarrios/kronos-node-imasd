var connectionService = require('./../Services/connectionService.js');
var sql = require('mssql');

var ActividadRepository = function(connection) {
	this.connection = connection;

	this.findActividadesByUsuario =  function(username, callback) {

			var request = connectionService.getConnectionRequest('\
				select distinct a.id as id, cp.nombre as proyecto, cm.nombre as modulo, ca.nombre as nombre \
				from dbo.actividad a \
				inner join dbo.componente ca on a.id_componente = ca.id \
				inner join dbo.componente cm on ca.id_padre = cm.id \
				inner join dbo.componente cp on cm.id_padre = cp.id \
				inner join dbo.usuario_actividad ua on ua.id_componente = ca.id \
				where id_usuario = 10 and ca.activo = 1 and cm.activo = 1 and cp.activo = 1\
				order by cp.nombre, cm.nombre, ca.nombre', callback);
	}
}

module.exports = new  ActividadRepository();