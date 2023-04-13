import * as SQLite from "expo-sqlite";

const abreConexao = ()=> {
  const database = SQLite.openDatabase('pl.db')
  return database
}
export const db = abreConexao() 