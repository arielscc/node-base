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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.confirm = exports.tasksOptions = exports.completeTaskOptions = exports.readInput = exports.pauseMenu = exports.inquirerMenu = void 0;
require("colors");
var inquirer_1 = __importDefault(require("inquirer"));
var questions = [
    {
        type: 'list',
        name: 'option',
        message: '¿Qué desea hacer?',
        choices: [
            {
                value: '1',
                name: "".concat('1.'.green, " Crear tarea"),
            },
            {
                value: '2',
                name: "".concat('2.'.green, " Listar tareas"),
            },
            {
                value: '3',
                name: "".concat('3.'.green, " Listar tareas completadas"),
            },
            {
                value: '4',
                name: "".concat('4.'.green, " Listar tareas pendientes"),
            },
            {
                value: '5',
                name: "".concat('5.'.green, " Completar tarea(s)"),
            },
            {
                value: '6',
                name: "".concat('6.'.green, " Borrar tareas"),
            },
            {
                value: '0',
                name: "".concat('0.'.green, " Salir"),
            },
        ],
    },
];
var inquirerMenu = function () { return __awaiter(void 0, void 0, void 0, function () {
    var option;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.clear();
                console.log('============================'.green);
                console.log('   Seleccione una opción'.bold);
                console.log('============================'.green);
                return [4 /*yield*/, inquirer_1.default.prompt(questions)];
            case 1:
                option = (_a.sent()).option;
                return [2 /*return*/, option];
        }
    });
}); };
exports.inquirerMenu = inquirerMenu;
var pauseMenu = function () { return __awaiter(void 0, void 0, void 0, function () {
    var question;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                question = [
                    {
                        type: 'input',
                        name: 'input',
                        message: "Presione ".concat('Enter'.green, " para continuar"),
                    },
                ];
                return [4 /*yield*/, inquirer_1.default.prompt(question)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
exports.pauseMenu = pauseMenu;
var readInput = function (message) { return __awaiter(void 0, void 0, void 0, function () {
    var question, description;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                question = [
                    {
                        type: 'input',
                        name: 'description',
                        message: message,
                        validate: function (value) {
                            if (value.length === 0) {
                                return 'Por favor ingrese un valor';
                            }
                            return true;
                        },
                    },
                ];
                return [4 /*yield*/, inquirer_1.default.prompt(question)];
            case 1:
                description = (_a.sent()).description;
                return [2 /*return*/, description];
        }
    });
}); };
exports.readInput = readInput;
var completeTaskOptions = function (tasks) { return __awaiter(void 0, void 0, void 0, function () {
    var options, ids;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                options = [
                    {
                        type: 'checkbox',
                        name: 'ids',
                        message: '¿Qué tarea(s) desea completar?',
                        choices: tasks.map(function (task, index) {
                            var idx = "".concat(index + 1, ".").green;
                            return {
                                value: task.id,
                                name: "".concat(idx, " ").concat(task.description),
                                checked: task.completed ? true : false,
                            };
                        }),
                    },
                ];
                return [4 /*yield*/, inquirer_1.default.prompt(options)];
            case 1:
                ids = (_a.sent()).ids;
                return [2 /*return*/, ids];
        }
    });
}); };
exports.completeTaskOptions = completeTaskOptions;
var tasksOptions = function (tasks) { return __awaiter(void 0, void 0, void 0, function () {
    var options, ids;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                options = [
                    {
                        type: 'list',
                        name: 'ids',
                        message: '¿Qué tarea desea eliminar?',
                        choices: __spreadArray(__spreadArray([], tasks.map(function (task, index) {
                            var idx = "".concat(index + 1, ".").green;
                            return {
                                value: task.id,
                                name: "".concat(idx, " ").concat(task.description),
                            };
                        }), true), [
                            {
                                value: '0',
                                name: "".concat('0.'.green, " Cancelar"),
                            },
                        ], false),
                    },
                ];
                return [4 /*yield*/, inquirer_1.default.prompt(options)];
            case 1:
                ids = (_a.sent()).ids;
                return [2 /*return*/, ids];
        }
    });
}); };
exports.tasksOptions = tasksOptions;
var confirm = function (message) { return __awaiter(void 0, void 0, void 0, function () {
    var question, ok;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                question = [
                    {
                        type: 'confirm',
                        name: 'ok',
                        message: message,
                    },
                ];
                return [4 /*yield*/, inquirer_1.default.prompt(question)];
            case 1:
                ok = (_a.sent()).ok;
                return [2 /*return*/, ok];
        }
    });
}); };
exports.confirm = confirm;
