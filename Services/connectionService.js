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

  this.getConnectionTransactionalRequest = function(myquery, callback) {    
     
                 var transaction = new sql.Transaction(new sql.Connection(config, function(err,data){}));

            transaction.begin(function(err) {
                // ... error checks

                var request = new sql.Request(transaction);

                request.query(myquery, function(err, recordset) {
                    // ... error checks
                      
                      var that = this;
                      
                    that.last = recordset[0].last_inserted;
                    transaction.commit(function(err, recordset) {
                        // ... error checks
                        if (!recordset)
                         recordset = {};
                        recordset.lastId = that.last;
                        console.log("Transaction commited.");
                        callback(err, recordset);
                        
                    });
                });
            });






  }

}

module.exports = new ConnectionService();