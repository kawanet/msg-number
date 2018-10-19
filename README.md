# msg-number - msgpack number container

[![npm version](https://badge.fury.io/js/msg-number.svg)](http://badge.fury.io/js/msg-number) [![Build Status](https://travis-ci.org/kawanet/msg-number.svg?branch=master)](https://travis-ci.org/kawanet/msg-number)

This provides following classes which implement [msg-interface](https://www.npmjs.com/package/msg-interface).

- MsgFixInt
- MsgInt8
- MsgUInt8
- MsgInt16
- MsgUInt16
- MsgInt32
- MsgUInt32
- MsgInt64
- MsgUInt64
- MsgFloat32
- MsgFloat64

### MsgInt32

```js
var MsgInt32 = require("msg-number").MsgInt32;
var MsgInt32 = require("./").MsgInt32;

var msg = new MsgInt32(-1234567890);

+msg; // => -1234567890

msg.toString(); // => '-1234567890'

var msgToBuffer = require("msg-interface").msgToBuffer;
msgToBuffer(msg); // => <Buffer d2 b6 69 fd 2e>
```

### MsgInt64

```js
var MsgInt64 = require("msg-number").MsgInt64;

var msg = new MsgInt64("-1234567890123456789");

+msg; // => -1234567890123456800

msg.toString(); // => '-1234567890123456789'

var msgToBuffer = require("msg-interface").msgToBuffer;
msgToBuffer(msg); // => <Buffer d3 ee dd ef 0b 82 16 7e eb>
```

### MsgUInt64

```js
var MsgUInt64 = require("msg-number").MsgUInt64;

var msg = new MsgUInt64("1234567890123456789");

+msg; // => 1234567890123456800

msg.toString(); // => '1234567890123456789'

var msgToBuffer = require("msg-interface").msgToBuffer;
msgToBuffer(msg); // => <Buffer cf 11 22 10 f4 7d e9 81 15>
```

### MsgFloat32

```js
var MsgFloat32 = require("msg-number").MsgFloat32;
var MsgFloat32 = require("./").MsgFloat32;

var msg = new MsgFloat32(-0.5);

+msg; // => -0.5

msg.toString(); // => '-0.5'

var msgToBuffer = require("msg-interface").msgToBuffer;
msgToBuffer(msg); // => <Buffer ca bf 00 00 00>
```

### GitHub

- [https://github.com/kawanet/msg-number](https://github.com/kawanet/msg-number)

### See Also

- [https://github.com/kawanet/msg-interface](https://github.com/kawanet/msg-interface)
- [https://github.com/kawanet/int64-buffer](https://github.com/kawanet/int64-buffer)

### The MIT License (MIT)

Copyright (c) 2017-2018 Yusuke Kawasaki

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
