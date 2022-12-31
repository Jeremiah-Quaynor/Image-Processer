"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pg_1 = require("pg");
var connection = new pg_1.Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'students',
    password: 'test',
    port: 5432
});
exports.default = connection;
