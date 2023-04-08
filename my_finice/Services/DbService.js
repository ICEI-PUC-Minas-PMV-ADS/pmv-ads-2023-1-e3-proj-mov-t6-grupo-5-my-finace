import * as SQLite from "expo-sqlite";

const abreConexao = ()=> {
  const database = SQLite.openDatabase('dadoo.db')
  return database
}
export const db = abreConexao() 