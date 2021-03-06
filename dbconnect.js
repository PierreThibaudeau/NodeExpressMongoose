internDbStateMessage = function(mongoose){
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
        console.log("we're connected !");
    });
};

module.exports = {
    dbStateMessage : function(mongoose){
        internDbStateMessage(mongoose);
    },
    connect : function(){
        var mongoose = require('mongoose');
        mongoose.connect('mongodb://localhost/library');

        internDbStateMessage(mongoose);

        return mongoose;
    }
};