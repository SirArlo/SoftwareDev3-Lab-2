let path = require('path');
let express = require('express');
let mainRouter = express.Router();

mainRouter.get('/', function (req, res) {
res.send('A wise man speaks because he has something to say; a fool speaks because he has to say something ~ Plato');
});

mainRouter.get('/about', function(req, res){
res.sendFile(path.join(__dirname, 'views', 'about.html'));
});

module.exports = mainRouter;