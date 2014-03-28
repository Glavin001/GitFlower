var express = require('express');
var app = express();


app.use(express.favicon())
    .use(express.bodyParser());

// Static Files
app.use(express.static(__dirname+'/bower_components'));
app.use(express.static(__dirname+'/public'));

// API
app.post('/repo', function(req, res){
    
    console.log(req.body);

    var repo = req.body.repo;
    
    var path = new Buffer(repo).toString('base64');

    res.json({
        "repo": repo,
        "path": path
    });

});

app.listen(3000);
