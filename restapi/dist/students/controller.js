"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addStudent = exports.getStudentByID = exports.getStudents = void 0;
var database_1 = __importDefault(require("../database"));
var queries_1 = __importDefault(require("./queries"));
var getStudents = function (_req, res) {
    database_1.default.query(queries_1.default.getStudents, function (error, results) {
        if (error) {
            console.log(error.message);
            return;
        }
        res.status(200).json(results.rows);
    });
};
exports.getStudents = getStudents;
var getStudentByID = function (req, res) {
    var id = Number(req.params.id);
    database_1.default.query(queries_1.default.getStudentByID, [id], function (error, results) {
        if (error) {
            console.log(error.message);
            return;
        }
        if (!results.rows.length) {
            res.status(400).send('Student does not exist');
            return;
        }
        res.status(200).json(results.rows);
    });
    // connection.end()
};
exports.getStudentByID = getStudentByID;
var addStudent = function (req, res) {
    var _a = req.body, name = _a.name, email = _a.email, age = _a.age, dob = _a.dob;
    database_1.default.query(queries_1.default.checkEmailExists, [email], function (error, results) {
        if (error) {
            console.log(error.message);
            return;
        }
        if (results.rows.length) {
            res.status(400).send('Student already exist');
            return;
        }
        else {
            database_1.default.query(queries_1.default.addStudent, [name, email, age, dob], function (error) {
                if (error) {
                    console.log(error.message);
                    return;
                }
                res.status(200).send("".concat(name, " has been added successfully"));
            });
        }
    });
};
exports.addStudent = addStudent;
