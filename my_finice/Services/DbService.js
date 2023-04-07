import SQLite from 'react-native-sqlite-storage'

const abreConexao = ()=> {
  const database = SQLite.openDatabase('m.db')
  return database
}
export const db = abreConexao()