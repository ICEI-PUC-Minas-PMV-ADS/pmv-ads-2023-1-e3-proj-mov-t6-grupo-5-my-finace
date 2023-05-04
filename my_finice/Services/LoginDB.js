
import {db} from "./DbService";

export const criartabela = ()=> {
    db.transaction((transaction)=>{
        transaction.executeSql("CREATE TABLE IF NOT EXISTS "+ 
        "Cadastros"+
        "(id INTEGER PRIMARY KEY AUTOINCREMENT, USERNAME TEXT,EMAIL TEXT,SENHA TEXT);"
                )
    })
}

export async function cadastrar (d){
    return new Promise((resolve)=>{
        db.transaction((transaction)=>{
            transaction.executeSql("INSERT INTO Cadastros(USERNAME,EMAIL,SENHA) VALUES(?,?,?);",[d.username,d.email,d.senha],()=>{
            resolve("Adicionado com sucesso")
            console.log('cadastrou')
            })
        })
    })
}

export async function validarlogin (d){
    return new Promise((resolve)=>{
        db.transaction((transaction)=>{
          transaction.executeSql("SELECT * FROM Cadastros where EMAIL = ? and SENHA = ? ;",[d.email,d.senha],(transaction, resultados)=>{
            console.log(resolve('Validado com sucesso'))
            })
          
        })
    })
}
