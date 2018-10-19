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
  it("MsgFloat32", () => {
    var msg = new m.MsgFloat32(0.5);
    assert(isMsg(msg));
    assert.strictEqual(+msg, 0.5);
    assert.strictEqual(msg.toString(), "0.5");
    assert.strictEqual(msg.msgpackLength, 5);
    assert.strictEqual(mtos(msg), "ca-3f-00-00-00");
  });

  it("MsgFloat64", () => {
    var msg = new m.MsgFloat64(0.5);
    assert(isMsg(msg));
    assert.strictEqual(+msg, 0.5);
    assert.strictEqual(msg.toString(), "0.5");
    assert.strictEqual(msg.msgpackLength, 9);
    assert.strictEqual(mtos(msg), "cb-3f-e0-00-00-00-00-00-00");
  });
});
