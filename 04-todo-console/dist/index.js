"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.todo = void 0;
var inquirerMenu_1 = require("./helpers/inquirerMenu");
var logTable_1 = require("./helpers/logTable");
var saveTasks_1 = require("./helpers/saveTasks");
var tasks_1 = __importDefault(require("./model/tasks"));
function todo() {
    return __awaiter(this, void 0, void 0, function () {
        var opt, tasks, tasksFromDB, _loop_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    tasks = new tasks_1.default();
                    tasksFromDB = (0, saveTasks_1.readTasks)();
                    if (tasksFromDB) {
                        tasks.loadTasks(tasksFromDB);
                    }
                    _loop_1 = function () {
                        var _b, description, data, completedTasks, pendingTasks, currentTasks, checkedIds_1, taskId, resp;
                        return __generator(this, function (_c) {
                            switch (_c.label) {
                                case 0: return [4 /*yield*/, (0, inquirerMenu_1.inquirerMenu)()];
                                case 1:
                                    opt = _c.sent();
                                    _b = opt;
                                    switch (_b) {
                                        case '1': return [3 /*break*/, 2];
                                        case '2': return [3 /*break*/, 4];
                                        case '3': return [3 /*break*/, 5];
                                        case '4': return [3 /*break*/, 6];
                                        case '5': return [3 /*break*/, 7];
                                        case '6': return [3 /*break*/, 9];
                                    }
                                    return [3 /*break*/, 13];
                                case 2: return [4 /*yield*/, (0, inquirerMenu_1.readInput)('Descripción:')];
                                case 3:
                                    description = _c.sent();
                                    tasks.createTask(description);
                                    return [3 /*break*/, 14];
                                case 4:
                                    data = tasks.listAllTasks();
                                    if (data.length === 0) {
                                        console.log('No hay tareas registradas'.green);
                                        return [3 /*break*/, 14];
                                    }
                                    (0, logTable_1.logTable)(data);
                                    return [3 /*break*/, 14];
                                case 5:
                                    completedTasks = tasks.listCompletedTasks();
                                    if (completedTasks.length === 0) {
                                        console.log('No hay tareas completadas'.green);
                                        return [3 /*break*/, 14];
                                    }
                                    (0, logTable_1.logTable)(completedTasks);
                                    return [3 /*break*/, 14];
                                case 6:
                                    pendingTasks = tasks.listPendingTasks();
                                    if (pendingTasks.length === 0) {
                                        console.log('No hay tareas pendientes'.green);
                                        return [3 /*break*/, 14];
                                    }
                                    (0, logTable_1.logTable)(pendingTasks);
                                    return [3 /*break*/, 14];
                                case 7:
                                    currentTasks = Object.values(tasks.taskList);
                                    return [4 /*yield*/, (0, inquirerMenu_1.completeTaskOptions)(currentTasks)];
                                case 8:
                                    checkedIds_1 = _c.sent();
                                    currentTasks.map(function (task) {
                                        task.completed = checkedIds_1.includes(task.id) ? true : false;
                                    });
                                    return [3 /*break*/, 14];
                                case 9: return [4 /*yield*/, (0, inquirerMenu_1.tasksOptions)(Object.values(tasks.taskList))];
                                case 10:
                                    taskId = _c.sent();
                                    if (!(taskId !== '0')) return [3 /*break*/, 12];
                                    return [4 /*yield*/, (0, inquirerMenu_1.confirm)('¿Está seguro?')];
                                case 11:
                                    resp = _c.sent();
                                    if (resp) {
                                        tasks.deleteTask(taskId);
                                        console.log('Tarea borrada');
                                    }
                                    _c.label = 12;
                                case 12: return [3 /*break*/, 14];
                                case 13: return [3 /*break*/, 14];
                                case 14:
                                    (0, saveTasks_1.saveTasks)(tasks.taskList);
                                    return [4 /*yield*/, (0, inquirerMenu_1.pauseMenu)()];
                                case 15:
                                    _c.sent();
                                    return [2 /*return*/];
                            }
                        });
                    };
                    _a.label = 1;
                case 1: return [5 /*yield**/, _loop_1()];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    if (opt !== '0') return [3 /*break*/, 1];
                    _a.label = 4;
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.todo = todo;
if (require.main === module) {
    todo().catch(function (error) {
        console.error(error);
        process.exit(1);
    });
}
