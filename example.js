var messages = require('./messages')()

messages.query('SELECT count(*) as count FROM message', function (err, rows) {
  console.log('Total messages that I have sent/gotten', rows[0].count)

  messages.query('SELECT count(*) as count, is_from_me FROM message GROUP BY is_from_me ORDER BY is_from_me', function (err, rows) {
    console.log('Out of these I sent', rows[0].count)
    console.log('Out of these I received', rows[1].count)
  })
})