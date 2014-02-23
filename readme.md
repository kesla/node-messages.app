# messages.app

Do interesting things with your local Messages.app-database

## Installation

```
npm install messages.app
```

## Example

```javascript
var messages = require('./messages')()

messages.query('SELECT count(*) as count FROM message', function (err, rows) {
  console.log('Total messages that I have sent/gotten', rows[0].count)

  messages.query('SELECT count(*) as count, is_from_me FROM message GROUP BY is_from_me ORDER BY is_from_me', function (err, rows) {
    console.log('Out of these I sent', rows[0].count)
    console.log('Out of these I received', rows[1].count)
  })
})
```

## Licence

Copyright (c) 2014 David Björklund & Lisa Övermyr

This software is released under the MIT license:

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

