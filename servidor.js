const express = require('express');
const app = express();
const mongoose = require('mongoose');
const clienteSchema = require('./modelos/cliente.js');
const router = express.Router();


app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(router);

mongoose.connect('mongodb+srv://yaniercordoba:87840ildefonso@misiontic.sroilvb.mongodb.net/DataBase_serviteca?retryWrites=true&w=majority');

app.listen(3000, () => {
    console.log('Escuchando por puerto 3000');
});

router.get('/', (req, res) => {
    res.send('SERVITECA servicios para tu vehiculo');
});

router.post('/cliente', (req, res) => {
    let nuevocliente = new clienteSchema({
    
        id: req.body.id,
        identificacion:req.body.identificacion,
        nombre: req.body.nombre,
        telefono: req.body.telefono,
        correo: req.body.correo,    

    });
    nuevocliente.save(function(err, datos){

        if (err) {
        
        console.log(err);
        
        }
        else{
        
        res.send('cliente almacenada correctamente');
        
        }
        });
        
        });

        router.get('/cliente', (req, res) => {

            clienteSchema.find(function(err, datos){
            
            if (err) {
            
            console.log("Error leyendo las tareas");
            
            }
            else{
            
            res.send(datos);
            
            }
            });
            
            });
