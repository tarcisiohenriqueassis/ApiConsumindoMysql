import express from 'express';

import retornaListaTimes from './service/service.js';

const app = express();

app.get('/times',async ( req, res) =>{

    let resultado = await retornaListaTimes(); 

    if(resultado.length > 0){
        res.json(resultado)

    }
    else{
        res.status(404).json({erro: 'erro'})
    }

});
app.listen(3000, () =>{
    
    let data = new Date();
    console.log('Servidor iniciado nas porta 3000 ' + data)

});
