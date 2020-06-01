const remote = require('electron').remote
const app = remote.app
const sqlite3 = require('sqlite3').verbose()

var db

// TODO : Veritabanı yolu düzenlenmeli
function connect () {
  const dbPath = app.getAppPath() + '/../src/database.sqlite'
  db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
      console.error('Veritabanına Bağlantı Hatası: ' + err.message)
    }
  })
}

// TODO : Kurulum işlemi sadece veritabanı boşsa devam edecek şekilde güncellenmeli
function firstInstall () {
  connect()
  const sql = 'SELECT name FROM sqlite_master WHERE type="table" AND name="settings"'
  db.get(sql, (row) => {
    if (row !== 'object') {
      // db.run('CREATE TABLE settings(key text, value text)')
    }
  })
}

function dbSelect (query, fetchType, callback) {
  connect()
  if (fetchType === 'row') {
    db.get(query, callback)
  } else {
    db.all(query, callback)
  }
  closeConnection()
}

// TODO : Ekleme işlemleri eksik
function dbInsert (table, data) {
  console.log(table, data)
  closeConnection()
}

// TODO : Güncelleme işlemi eksik
function dbUpdate (table, data, id) {
  console.log(table, data, id)
  closeConnection()
}

// TODO : Silme işlemi eksik
function dbDelete (id) {
  console.log(id)
  closeConnection()
}

function closeConnection () {
  db.close((err) => {
    if (err) {
      console.error(err.message)
    }
  })
}

export { dbSelect, dbInsert, dbUpdate, dbDelete, firstInstall }
