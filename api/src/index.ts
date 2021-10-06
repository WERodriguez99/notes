import { server } from './app';
import './db';

server.set('port', process.env.PORT || 3001);
server.listen(server.get('port'), () => {
    console.log(`%s listening at ${server.get('port')}`)
})