import pool from "../conexão/conexao.js";


 async function retornaListaTimes() {
    
    const conexao = await pool.getConnection();

    const Campeao_tb = conexao.query('SELECT campeao, vice FROM bd_times.times');
    const Campeao = Campeao_tb[0];

    conexao.release();

    return Campeao
};

export default retornaListaTimes;