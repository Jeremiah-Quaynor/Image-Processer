"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var routes_1 = __importDefault(require("./students/routes"));
var express_1 = __importDefault(require("express"));
var app = (0, express_1.default)();
var port = 3000;
app.use(express_1.default.json());
app.get('/', function (req, res) {
    res.send('Home route');
});
app.use('/api/v1/student', routes_1.default);
app.listen(port, function () {
    console.log("server started on http://localhost:3000");
});
