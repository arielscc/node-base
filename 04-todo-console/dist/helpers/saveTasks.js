"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.readTasks = exports.saveTasks = void 0;
var fs_1 = require("fs");
var os_1 = __importDefault(require("os"));
var path_1 = require("path");
var home = os_1.default.homedir();
var DB_FILE = (0, path_1.join)(home, '.todos-db', 'data.json');
var saveTasks = function (tasks) {
    var dir = (0, path_1.dirname)(DB_FILE);
    if (!(0, fs_1.existsSync)(dir)) {
        (0, fs_1.mkdirSync)(dir, { recursive: true });
    }
    var tmpFile = "".concat(DB_FILE, ".tmp");
    (0, fs_1.writeFileSync)(tmpFile, JSON.stringify(tasks));
    (0, fs_1.renameSync)(tmpFile, DB_FILE);
};
exports.saveTasks = saveTasks;
var readTasks = function () {
    if ((0, fs_1.existsSync)(DB_FILE)) {
        var data = (0, fs_1.readFileSync)(DB_FILE, 'utf8');
        return JSON.parse(data);
    }
    else {
        return [];
    }
};
exports.readTasks = readTasks;
