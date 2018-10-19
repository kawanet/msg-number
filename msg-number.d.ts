/// <reference types="node" />

import {MsgInterface} from "msg-interface";
import {Int64BE, Uint64BE} from "int64-buffer";

export declare class MsgFixInt implements MsgInterface {
    constructor(value: number);

    msgpackLength: number;

    writeMsgpackTo(buffer: Buffer, offset: number): number;
}

export declare class MsgInt8 implements MsgInterface {
    constructor(value: number);

    msgpackLength: number;

    writeMsgpackTo(buffer: Buffer, offset: number): number;
}

export declare class MsgUInt8 implements MsgInterface {
    constructor(value: number);

    msgpackLength: number;

    writeMsgpackTo(buffer: Buffer, offset: number): number;
}

export declare class MsgInt16 implements MsgInterface {
    constructor(value: number);

    msgpackLength: number;

    writeMsgpackTo(buffer: Buffer, offset: number): number;
}

export declare class MsgUInt16 implements MsgInterface {
    constructor(value: number);

    msgpackLength: number;

    writeMsgpackTo(buffer: Buffer, offset: number): number;
}

export declare class MsgInt32 implements MsgInterface {
    constructor(value: number);

    msgpackLength: number;

    writeMsgpackTo(buffer: Buffer, offset: number): number;
}

export declare class MsgUInt32 implements MsgInterface {
    constructor(value: number);

    msgpackLength: number;

    writeMsgpackTo(buffer: Buffer, offset: number): number;
}

export declare class MsgInt64 extends Int64BE implements MsgInterface {
    msgpackLength: number;

    writeMsgpackTo(buffer: Buffer, offset: number): number;
}

export declare class MsgUInt64 extends Uint64BE implements MsgInterface {
    msgpackLength: number;

    writeMsgpackTo(buffer: Buffer, offset: number): number;
}

export declare class MsgFloat32 implements MsgInterface {
    constructor(value: number);

    msgpackLength: number;

    writeMsgpackTo(buffer: Buffer, offset: number): number;
}

export declare class MsgFloat64 implements MsgInterface {
    constructor(value: number);

    msgpackLength: number;

    writeMsgpackTo(buffer: Buffer, offset: number): number;
}
