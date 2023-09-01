"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var uuid_1 = require("uuid");
var Task = /** @class */ (function () {
    function Task(description) {
        this.id = '';
        this.description = '';
        this.createdAt = '';
        this.updatedAt = '';
        this.id = (0, uuid_1.v4)();
        this.description = description;
        this.createdAt = new Date().toISOString();
        this.updatedAt = new Date().toISOString();
        this.completed = false;
    }
    return Task;
}());
exports.default = Task;
