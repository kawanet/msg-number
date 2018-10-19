"use strict";

var assert = require("assert");
var MsgInterface = require("msg-interface");
var isMsg = MsgInterface.isMsg;
var msgToBuffer = MsgInterface.msgToBuffer;
var m = require("../");

var TITLE = __filename.split("/").pop();

var atos = (array) => [].map.call(array, (v) => (v > 15 ? "" : "0") + v.toString(16)).join("-");
var mtos = (msg) => atos(msgToBuffer(msg));

describe(TITLE, () => {

  it("MsgFixInt", () => {
    var msg = new m.MsgFixInt(-1);
    assert(isMsg(msg));
    assert.strictEqual(+msg, -1);
    assert.strictEqual(msg.toString(), "-1");
    assert.strictEqual(msg.msgpackLength, 1);
    assert.strictEqual(mtos(msg), "ff");

    assert.strictEqual(mtos(new m.MsgFixInt(0)), "00");
    assert.strictEqual(mtos(new m.MsgFixInt(1)), "01");
    assert.strictEqual(mtos(new m.MsgFixInt(127)), "7f");
  });

  it("MsgInt8", () => {
    var msg = new m.MsgInt8(-1);
    assert(isMsg(msg));
    assert.strictEqual(+msg, -1);
    assert.strictEqual(msg.toString(), "-1");
    assert.strictEqual(msg.msgpackLength, 2);
    assert.strictEqual(mtos(msg), "d0-ff");

    assert.strictEqual(mtos(new m.MsgInt8(0)), "d0-00");
    assert.strictEqual(mtos(new m.MsgInt8(1)), "d0-01");
    assert.strictEqual(mtos(new m.MsgInt8(127)), "d0-7f");
  });

  it("MsgUInt8", () => {
    var msg = new m.MsgUInt8(1);
    assert(isMsg(msg));
    assert.strictEqual(+msg, 1);
    assert.strictEqual(msg.toString(), "1");
    assert.strictEqual(msg.msgpackLength, 2);
    assert.strictEqual(mtos(msg), "cc-01");

    assert.strictEqual(mtos(new m.MsgUInt8(0)), "cc-00");
    assert.strictEqual(mtos(new m.MsgUInt8(255)), "cc-ff");
  });

  it("MsgInt16", () => {
    var msg = new m.MsgInt16(-1);
    assert(isMsg(msg));
    assert.strictEqual(+msg, -1);
    assert.strictEqual(msg.toString(), "-1");
    assert.strictEqual(msg.msgpackLength, 3);
    assert.strictEqual(mtos(msg), "d1-ff-ff");

    assert.strictEqual(mtos(new m.MsgInt16(0)), "d1-00-00");
    assert.strictEqual(mtos(new m.MsgInt16(32767)), "d1-7f-ff");
    assert.strictEqual(mtos(new m.MsgInt16(-32768)), "d1-80-00");
  });

  it("MsgUInt16", () => {
    var msg = new m.MsgUInt16(1);
    assert(isMsg(msg));
    assert.strictEqual(+msg, 1);
    assert.strictEqual(msg.toString(), "1");
    assert.strictEqual(msg.msgpackLength, 3);
    assert.strictEqual(mtos(msg), "cd-00-01");

    assert.strictEqual(mtos(new m.MsgUInt16(0)), "cd-00-00");
    assert.strictEqual(mtos(new m.MsgUInt16(65535)), "cd-ff-ff");
  });

  it("MsgInt32", () => {
    var msg = new m.MsgInt32(-1);
    assert(isMsg(msg));
    assert.strictEqual(+msg, -1);
    assert.strictEqual(msg.toString(), "-1");
    assert.strictEqual(msg.msgpackLength, 5);
    assert.strictEqual(mtos(msg), "d2-ff-ff-ff-ff");

    assert.strictEqual(mtos(new m.MsgInt32(0)), "d2-00-00-00-00");
    assert.strictEqual(mtos(new m.MsgInt32(2147483647)), "d2-7f-ff-ff-ff");
    assert.strictEqual(mtos(new m.MsgInt32(-2147483648)), "d2-80-00-00-00");
  });

  it("MsgUInt32", () => {
    var msg = new m.MsgUInt32(1);
    assert(isMsg(msg));
    assert.strictEqual(+msg, 1);
    assert.strictEqual(msg.toString(), "1");
    assert.strictEqual(msg.msgpackLength, 5);
    assert.strictEqual(mtos(msg), "ce-00-00-00-01");

    assert.strictEqual(mtos(new m.MsgUInt32(0)), "ce-00-00-00-00");
    assert.strictEqual(mtos(new m.MsgUInt32(4294967295)), "ce-ff-ff-ff-ff");
  });
});
