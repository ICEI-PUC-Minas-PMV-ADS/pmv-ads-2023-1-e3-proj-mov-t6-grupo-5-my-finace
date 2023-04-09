
import {db} from "./DbService";

export const criartabela = ()=> {
    db.transaction((transaction)=>{
        transaction.executeSql("CREATE TABLE IF NOT EXISTS "+ 
        "Despesas "+
        "(id INTEGER PRIMARY KEY AUTOINCREMENT, Data TEXT, Valor FOALT, Descricao TEXT, Parcela INTEGER, Categoria TEXT);"
        )
    })
}

export async function adicionarDespesas (d){
    return new Promise((resolve)=>{
        db.transaction((transaction)=>{
            transaction.executeSql("INSERT INTO Despesas(Data,Valor,Descricao,Parcela,Categoria) VALUES(?,?,?,?,?);",[d.Data,d.Valor,d.Descricao,d.parcela,d.Categoria],()=>{
                resolve("Adicionado com sucesso")
            })
        })
    })
}

export async function recuperandoDespesas (){
    return new Promise((resolve)=>{
        db.transaction((transaction)=>{
          transaction.executeSql("SELECT * FROM Despesas;",[],(transaction, resultados)=>{
                resolve(resultados.rows._array)
            })
          
        })
    })
}
export async function recuperandoDespesasEspecifica (d){
    return new Promise((resolve)=>{
        db.transaction((transaction)=>{
          transaction.executeSql("SELECT * FROM Despesas WHERE id=?;",[d],(transaction, resultados)=>{
                resolve(resultados.rows._array)
            })
          
        })
    })
}
export async function atualizarDespesas (d){
    return new Promise((resolve)=>{
        db.transaction((transaction)=>{
            transaction.executeSql("UPDATE Despesas SET Data=?,Valor=?,Descricao=?,Parcela=?,Categoria=? WHERE id=?;",[d.Data,d.Valor,d.Descricao,d.parcela,d.Categoria,d.id],()=>{
                resolve("Adicionado com sucesso")
            })
        })
    })
}

export async function deleteDespesas (id){
    return new Promise((resolve)=>{
        db.transaction((transaction)=>{
            transaction.executeSql("DELETE FROM Despesas WHERE id=?;",[id],()=>{
                resolve("Adicionado com sucesso")
            })
        })
    })
}