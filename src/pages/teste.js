(async () => { 

const db = require("./db");
console.log("OK");
 
await db.insereregistro({ID: 3, NOME: 'terceiro'});

await db.atualizaRegistro(2, {NOME: 'Segundo'});

await db.deletaRegistro(4);

const clientes = await db.selecionatudo();
console.log(clientes);


}) ();