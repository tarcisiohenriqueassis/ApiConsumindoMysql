import pool from "../conexão/conexao.js";


 async function executaQuery(conexao,query) {
  
   const resultado_Query = await conexao.query(query);
   const resposta = resultado_Query[0];

   return resposta;
 }


 async function retornaListaTimes() {
    
    const conexao = await pool.getConnection();
    const query ="SELECT id,campeao,vice,ano FROM times";
    
    const resposta = executaQuery(conexao,query)

    conexao.release();
    
    return resposta;
  };

  async function retornaTimeID(id) {
    
    const conexao = await pool.getConnection();
    const query ='SELECT id,campeao,vice,ano FROM times WHERE id ='+id;
    
    const resposta = executaQuery(conexao,query);

    conexao.release();

    return resposta;
  };

  async function retornaTimePorAno(ano){

     const conexao = await pool.getConnection();
     const query = 'SELECT id,campeao,vice, ano FROM times WHERE ano ='+ano; 
     
     const resultado = executaQuery(conexao,query);

     conexao.release();

     return resultado;
  };

  async function retornaTimePeloNome(nome) {
    
    const conexao = await pool.getConnection();
    const query = 'SELECT id,campeao FROM times WHERE campeao ="'+nome+'"';

    const resultado = executaQuery(conexao,query);

    conexao.release();

    return resultado;
  };
export  {retornaListaTimes, retornaTimeID,retornaTimePorAno, retornaTimePeloNome}; 