"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logTable = void 0;
var table_1 = require("table");
var config = {
    singleLine: true,
    header: {
        alignment: 'center',
        content: 'Tareas'.yellow,
    },
    columns: {
        1: {
            width: 25,
        },
    },
};
var headers = ['numero', 'descripción', 'estado', 'creado el', 'actualizado el'].map(function (header) { return header.green; });
var logTable = function (data) {
    console.log((0, table_1.table)(__spreadArray([headers], data, true), config));
};
exports.logTable = logTable;
