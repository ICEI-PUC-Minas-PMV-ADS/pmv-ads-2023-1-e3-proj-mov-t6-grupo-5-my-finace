import * as SQLite from "expo-sqlite";

const abreConexao = ()=> {
  const database = SQLite.openDatabase('da.db')
  return database
}
export const db = abreConexao()