"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const path_1 = __importDefault(require("path"));
const express_handlebars_1 = __importDefault(require("express-handlebars"));
require("./db");
app_1.server.set('port', process.env.PORT || 3001);
app_1.server.set('views', path_1.default.join(__dirname, 'views'));
app_1.server.engine('.hbs', (0, express_handlebars_1.default)({
    defaultLayout: 'main',
    layoutsDir: path_1.default.join(app_1.server.get('views'), 'layouts'),
    partialsDir: path_1.default.join(app_1.server.get('views'), 'partials'),
    extname: '.hbs',
}));
app_1.server.set('view engine', '.hbs');
app_1.server.listen(app_1.server.get('port'), () => {
    console.log(`%s listening at ${app_1.server.get('port')}`);
});
