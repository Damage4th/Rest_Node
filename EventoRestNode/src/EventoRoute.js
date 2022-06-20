const EventoController = require('./EventoController');

module.exports =(app) =>{
app.post('/evento',EventoController.post);
app.put('/evento/:id',EventoController.put);
app.delete('/evento/:id',EventoController.delete);
app.get('/evento',EventoController.get);
app.get('/evento/:id',EventoController.put);

}