var connectionService = require('./../Services/connectionService.js');
var sql = require('mssql');

var TrabajoRepository = function(connection) {
	this.connection = connection;

	this.save =  function(trabajo,callback) {

			var myquery = 'insert into dbo.trabajo \
                    (id_actividad,id_usuario,fecha_carga,horas_insumidas,descripcion)select ('+trabajo.id_actividad+'),(select top 1 id \
                     from dbo.usuario where username = \''+trabajo.username+'\'),\''+trabajo.fecha+'\','+trabajo.horas+',\''+trabajo.descripcion+'\'; SELECT @@IDENTITY as last_inserted; ';

			var request = connectionService.getConnectionTransactionalRequest(myquery,function(err,data){
				if (!err){
					trabajo.id = data.lastId;
					data = trabajo;
				}
				callback(err,data);
					
			} );
	}
}

module.exports = new  TrabajoRepository();