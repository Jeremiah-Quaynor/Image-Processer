"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var controller_1 = require("./controller");
var router = (0, express_1.Router)();
router.get('/', controller_1.getStudents);
router.get('/:id', controller_1.getStudentByID);
router.post('/', controller_1.addStudent);
exports.default = router;
