import express from 'express';

import {retornaListaTimes,retornaTimeID,retornaTimePorAno,retornaTimePeloNome} from './service/service.js';


const app = express();


app.get('/times',async (req,res)=>{

    let ano = req.query.ano;
    let time = req.query.time;
    
    let resultadoPesquisa;

    if(typeof ano === 'undefined' && typeof time === 'undefined'){
        resultadoPesquisa = await retornaListaTimes();
    }
    else if(typeof ano !== 'undefined'){
        resultadoPesquisa = await retornaTimePorAno(parseInt(ano));
    }
    else if(typeof time !== 'undefined'){
        resultadoPesquisa = await retornaTimePeloNome(time);
    }

    if(resultadoPesquisa.length > 0){
        res.json(resultadoPesquisa)
    }
    else{
        res.status(404).json({mensagem : 'nenhum time encontrado' })
    }

})

app.get('/times/:id',async ( req, res) =>{

    let id = parseInt(req.params.id);
    let resultadoBuscaID = await retornaTimeID(id);

    if(resultadoBuscaID.length > 0){
        res.json(resultadoBuscaID);
    }
    else if(isNaN(id)){
        res.status(404).json({erro :'numero invalido'})
    }
    else{
        res.status(404).json({ mensagem : 'id não encontrado'})
    }
});

app.listen(3000, () =>{
    
    let data = new Date();
    console.log('Servidor iniciado nas porta 3000 ' + data)

});
