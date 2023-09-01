"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var composeData_1 = require("../lib/composeData");
var task_1 = __importDefault(require("./task"));
var Tasks = /** @class */ (function () {
    function Tasks() {
        this._taskList = {};
        this._taskList = {};
    }
    Object.defineProperty(Tasks.prototype, "taskList", {
        get: function () {
            return Object.values(this._taskList);
        },
        enumerable: false,
        configurable: true
    });
    Tasks.prototype.createTask = function (description) {
        if (description === void 0) { description = ''; }
        var task = new task_1.default(description);
        this._taskList[task.id] = task;
    };
    Tasks.prototype.loadTasks = function (tasks) {
        var _this = this;
        tasks.forEach(function (task) {
            _this._taskList[task.id] = task;
        });
    };
    Tasks.prototype.listAllTasks = function () {
        var data = this.taskList.map(composeData_1.composeData);
        return data;
    };
    Tasks.prototype.listCompletedTasks = function () {
        var data = this.taskList.filter(function (task) { return task.completed; }).map(composeData_1.composeData);
        return data;
    };
    Tasks.prototype.listPendingTasks = function () {
        var data = this.taskList.filter(function (task) { return !task.completed; }).map(composeData_1.composeData);
        return data;
    };
    Tasks.prototype.deleteTask = function (id) {
        if (this._taskList[id]) {
            delete this._taskList[id];
        }
    };
    return Tasks;
}());
exports.default = Tasks;
