const {createServer} = require('@lhci/server');
const sqlite = require('sqlite3');

console.log('Starting server...');
createServer({
  port: 9001,
  storage: {
    storageMethod: 'sql',
    sqlDialect: 'sqlite',
    sqlDatabasePath: './lhci.db',
    dbConnection: sqlite.Database 
  },
}).then(({port}) => console.log('LHCI listening on port', port));
