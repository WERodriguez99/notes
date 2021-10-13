import { server } from './app';
import path from 'path';
import exphbs from 'express-handlebars';

import './db';

server.set('port', process.env.PORT || 3001);
server.set('views', path.join(__dirname, 'views'))
server.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(server.get('views'), 'layouts'),
    partialsDir: path.join(server.get('views'), 'partials'),
    extname: '.hbs',
}));
server.set('view engine', '.hbs');

server.listen(server.get('port'), () => {
    console.log(`%s listening at ${server.get('port')}`)
})