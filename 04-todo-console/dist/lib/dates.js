"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatDateTime = void 0;
var formatDateTime = function (date) {
    var dateObject = new Date(date);
    var options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
    };
    return new Intl.DateTimeFormat('es-ES', options).format(dateObject);
};
exports.formatDateTime = formatDateTime;
