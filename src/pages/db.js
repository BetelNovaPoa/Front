const config = {
    host: 'sql802.main-hosting.eu',
    user: 'u722330063_niloart',
    password: '@Nilo2236',
    database: 'u722330063_bd_betel',
    port: 3306,

};

async function connect () {
    if(global.connection && global.connection.state !== 'disconnected')
    return global.connection;

    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection(config);
    console.log("Conectou");
    global.connection = connection;
    return connection
}

async function selecionatudo(){
    const conn = await connect();
    const [rows] = await conn.query('select * from TESTE;');
    return await rows;
}

async function insereregistro(TESTE){
    const conn = await connect();
    const sql = 'INSERT INTO TESTE(ID,NOME) VALUES (?,?);';
    const values = [TESTE.ID, TESTE.NOME]
    await conn.query(sql, values);
}

async function atualizaRegistro(ID, TESTE){
    const conn = await connect();
    const sql = 'UPDATE TESTE SET NOME=? WHERE ID =?;';
    const values = [TESTE.NOME, ID]
    await conn.query(sql, values);
}

async function deletaRegistro(ID){
    const conn = await connect();
    const sql = 'DELETE FROM TESTE WHERE ID =?;';
    const values = [ID]
    await conn.query(sql, values);
}

module.exports = {selecionatudo,insereregistro,atualizaRegistro,deletaRegistro}