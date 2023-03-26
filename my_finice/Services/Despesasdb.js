import Database from "./DbService";
const DB_EXEC = Database.getConnection();

export const getDespesas = async()=>{
    let results = await DB_EXEC('select * from despesas');
    console.log(results)
    return results.rows._array
}
export const insertDespesas = async(param)=>{
    let results = await DB_EXEC('insert into despesas(data,valor,descricao,numeroParecela,categoria) values(?,?,?,?,?)',
    [param.data,param.valor,param.descricao,param.numeroParecela,param.categoria]);
    console.log(results)
    return results.rowsAffected;
}