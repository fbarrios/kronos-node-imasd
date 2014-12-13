var sql = require('mssql');

var ConnectionService = function() {

  var config = {
    user: 'sa',
    password: 'Factory.07',
    server: '200.69.243.17', 
    port: '14330',
    database: 'kronosnet2'
  }

  this.getConnectionRequest = function(query, callback) {    
     
     var connection = new sql.Connection(config, function(err, recordset) {
        var request = new sql.Request(connection);
        request.query(query, callback);
    });

  }

}

module.exports = new ConnectionService();