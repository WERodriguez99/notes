"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
require("./db");
app_1.server.set('port', process.env.PORT || 3001);
app_1.server.listen(app_1.server.get('port'), () => {
    console.log(`%s listening at ${app_1.server.get('port')}`);
});
