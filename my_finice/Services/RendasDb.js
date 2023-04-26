import {db} from "./DbService";

export const CreateTable = ()=> {
    console.log('create')
    db.transaction((transaction)=>{
        transaction.executeSql("CREATE TABLE IF NOT EXISTS "+ 
        "Rendas "+
        "(id INTEGER PRIMARY KEY AUTOINCREMENT, Dia INTEGER, Quantia REAL, Desc TEXT, Credito REAL, Destinacao TEXT);"
        )
    })
}

export async function adicionarRenda (dt){
    return new Promise((resolve)=>{
        db.transaction((transaction)=>{
            transaction.executeSql("INSERT INTO Rendas(Dia,Quantia,Desc,Credito,Destinacao) VALUES(?,?,?,?,?);",[dt.Dia,dt.Quantia,dt.Desc,dt.Credito,dt.Destinacao],()=>{
                resolve("Adicionado com sucesso")
            })
        })
    })
}

export async function recuperandoRendas (){
    return new Promise((resolve)=>{
        db.transaction((transaction)=>{
          transaction.executeSql("SELECT * FROM Rendas;",[],(transaction, resultados)=>{
                resolve(resultados.rows._array)
            })
          
        })
    })
}
export async function recuperandoRendasEspecifica (dt){
    return new Promise((resolve)=>{
        db.transaction((transaction)=>{
          transaction.executeSql("SELECT * FROM Rendas WHERE id=?;",[dt],(transaction, resultados)=>{
                resolve(resultados.rows._array)
            })
          
        })
    })
}
export async function atualizarRendas (dt){
    return new Promise((resolve)=>{
        db.transaction((transaction)=>{
            transaction.executeSql("UPDATE Rendas SET Dia=?,Quantia=?,Desc=?,Credito=?,Destinacao=? WHERE id=?;",[dt.Dia,dt.Quantia,dt.Desc,dt.Credito,dt.Destinacao,dt.id],()=>{
                resolve("Alteração realizada com sucesso")
            })
        })
    })
}

export async function deleteRendas (id){
    return new Promise((resolve)=>{
        db.transaction((transaction)=>{
            transaction.executeSql("DELETE FROM Rendas WHERE id=?;",[id],()=>{
                resolve("Excluído com sucesso")
            })
        })
    })
}

export async function somaRendas (){
    return new Promise((resolve)=>{
        db.transaction((transaction)=>{
          transaction.executeSql("SELECT SUM(Quantia) as Valor FROM Rendas ;",[],(transaction, resultados)=>{
                resolve(resultados.rows._array)
            })
          
        })
    })
}

export async function DestinacaoRend (){
    return new Promise((resolve)=>{
        db.transaction((transaction)=>{
          transaction.executeSql(
            "SELECT CASE Destinacao WHEN 'bank-transfer' THEN 'Investimentos' WHEN 'newspaper-check' THEN 'Despesa Fixa' WHEN 'safe' THEN 'Poupança' WHEN 'head-question' THEN 'Outros' ELSE 'ND' END AS destinacao, COUNT(*) as QTD FROM Rendas GROUP BY destinacao;",[],(transaction, resultados)=>{
                resolve(resultados.rows._array)
            })
          
        })
    })
}
