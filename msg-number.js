// msg-number.js

var I = require("int64-buffer");

exports.MsgFixInt = create(1, function(buffer, offset) {
  offset |= 0;
  buffer[offset] = this.value & 255;
  return 1;
});

exports.MsgInt8 = create(2, function(buffer, offset) {
  offset |= 0;
  buffer[offset] = 0xd0;
  buffer[offset + 1] = this.value & 255;
  return 2;
});

exports.MsgUInt8 = create(2, function(buffer, offset) {
  offset |= 0;
  buffer[offset] = 0xcc;
  buffer[offset + 1] = this.value & 255;
  return 2;
});

exports.MsgInt16 = create(3, function(buffer, offset) {
  offset |= 0;
  buffer[offset] = 0xd1;
  buffer.writeInt16BE(+this.value, offset + 1);
  return 3;
});

exports.MsgUInt16 = create(3, function(buffer, offset) {
  offset |= 0;
  buffer[offset] = 0xcd;
  buffer.writeUInt16BE(+this.value, offset + 1);
  return 3;
});

exports.MsgInt32 = create(5, function(buffer, offset) {
  offset |= 0;
  buffer[offset] = 0xd2;
  buffer.writeInt32BE(+this.value, offset + 1);
  return 5;
});

exports.MsgUInt32 = create(5, function(buffer, offset) {
  offset |= 0;
  buffer[offset] = 0xce;
  buffer.writeUInt32BE(+this.value, offset + 1);
  return 5;
});

exports.MsgFloat32 = create(5, function(buffer, offset) {
  offset |= 0;
  buffer[offset] = 0xca;
  buffer.writeFloatBE(+this.value, offset + 1);
  return 5;
});

exports.MsgFloat64 = create(9, function(buffer, offset) {
  offset |= 0;
  buffer[offset] = 0xcb;
  buffer.writeDoubleBE(+this.value, offset + 1);
  return 9;
});

var MsgUInt64 = exports.MsgUInt64 = inherits(I.Uint64BE, 0xcf);
MsgUInt64.isUint64BE = I.Uint64BE.isUint64BE;

var MsgInt64 = exports.MsgInt64 = inherits(I.Int64BE, 0xd3);
MsgInt64.isInt64BE = I.Int64BE.isInt64BE;

function create(msgpackLength, writeMsgpackTo) {
  var P = MsgNumber.prototype;

  P.msgpackLength = msgpackLength;

  P.writeMsgpackTo = writeMsgpackTo;

  P.valueOf = valueOf;

  P.toString = toString;

  return MsgNumber;

  function MsgNumber(value) {
    this.value = +value;
  }
}

function valueOf() {
  return +this.value;
}

function toString(radix) {
  return (+this.value).toString(radix);
}

function inherits(_super, token) {
  var P = MsgNumber.prototype = Object.create(_super.prototype);

  P.msgpackLength = 9;

  P.writeMsgpackTo = function(buffer, offset) {
    offset |= 0;
    buffer[offset] = token;
    this.toBuffer().copy(buffer, offset + 1);
    return 9;
  };

  return MsgNumber;

  function MsgNumber() {
    var that = (this instanceof MsgNumber) ? this : new MsgNumber();
    _super.apply(that, arguments);
    return that;
  }
}
