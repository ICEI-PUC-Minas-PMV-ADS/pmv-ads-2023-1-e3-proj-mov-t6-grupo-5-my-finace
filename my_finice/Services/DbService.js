import SQLite from 'react-native-sqlite-storage';
export const Database = {
    getConnection: () => {
      
        const db = SQLite.openDatabase('banco_dado.db');
  
      db.transaction((tx) => {
        tx.executeSql(
          'create table if not exists despesas(id integer primary key not null, data text not null, valor real not null, descricao text not null, numeroParecela int not null, categoria text not null);'
        );
      });
  
      const ExecuteQuery = (sql, params = []) =>
        new Promise((resolve, reject) => {
          db.transaction((trans) => {
            trans.executeSql(
              sql,
              params,
              (trans, results) => {
                resolve(results);
              },
              (error) => {
                reject(error);
              }
            );
          });
        });
  
      return ExecuteQuery;
    },
  };
  
  export default Database;