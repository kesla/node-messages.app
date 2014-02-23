var sqlite3 = require('sqlite3')

  , MessagesApp = function () {
    if (!(this instanceof MessagesApp))
      return new MessagesApp

    this.db = new sqlite3.Database(process.env.HOME + '/Library/Messages/chat.db')
  }

MessagesApp.prototype.query = function (query, callback) {
  this.db.all(query, callback)
}

MessagesApp.prototype.close = function () {
  this.db.close()
}

module.exports = MessagesApp