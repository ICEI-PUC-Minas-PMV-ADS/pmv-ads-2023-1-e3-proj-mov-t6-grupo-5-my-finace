import {db} from "./DbService";

export const CreateTable = ()=> {
    console.log('create')
    db.transaction((transaction)=>{
        transaction.executeSql("CREATE TABLE IF NOT EXISTS "+ 
        "Metas "+
        "(id INTEGER PRIMARY KEY AUTOINCREMENT, titulo_meta TEXT, valor_meta DOUBLE, descricao_meta TEXT, poupar_mes DOUBLE);"
        )
    })
}

export async function adicionarMeta (dt){
    return new Promise((resolve)=>{
        db.transaction((transaction)=>{
            transaction.executeSql("INSERT INTO Metas(titulo_meta,valor_meta,descricao_meta,poupar_mes) VALUES(?,?,?,?);",[dt.tituloMeta,dt.valorMeta,dt.descricaoMeta,dt.pouparMes],()=>{
                resolve("Adicionado com sucesso")
            })
        })
    })
}

export async function getMetas (){
    return new Promise((resolve)=>{
        db.transaction((transaction)=>{
          transaction.executeSql("SELECT * FROM Metas;",[],(transaction, resultados)=>{
                resolve(resultados.rows._array)
            })
          
        })
    })
}

export async function getMetaEspecifica (id){
    return new Promise((resolve)=>{
        db.transaction((transaction)=>{
          transaction.executeSql("SELECT * FROM Metas WHERE id=?;",[id],(transaction, resultados)=>{
                resolve(resultados.rows._array)
            })
          
        })
    })
}

export async function atualizarMeta (dt){
    return new Promise((resolve)=>{
        db.transaction((transaction)=>{
            transaction.executeSql("UPDATE Metas SET titulo_meta=?,valor_meta=?,descricao_meta=?,poupar_mes=? WHERE id=?;",[dt.tituloMeta,dt.valorMeta,dt.descricaoMeta,dt.pouparMes,dt.id],()=>{
                resolve("Atualizada com sucesso")
            })
        })
    })
}

export async function deleteMeta (id){
    return new Promise((resolve)=>{
        db.transaction((transaction)=>{
            transaction.executeSql("DELETE FROM Metas WHERE id=?;",[id],()=>{
                resolve("Excluida com sucesso")
            })
        })
    })
}