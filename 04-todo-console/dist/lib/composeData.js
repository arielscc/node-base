"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.composeData = void 0;
var dates_1 = require("./dates");
var composeData = function (task, index) {
    return [
        index + 1,
        task.description,
        task.completed ? 'Completada'.green : 'Pendiente'.red,
        (0, dates_1.formatDateTime)(task.createdAt),
        (0, dates_1.formatDateTime)(task.updatedAt),
    ];
};
exports.composeData = composeData;
