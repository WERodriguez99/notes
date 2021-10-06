import mongoose from 'mongoose';
import { mongodb } from './keys';

(async () => {
    try {
        const db = await mongoose.connect(mongodb.URI)
        console.log(`DB is conected in ${db.connection.name}`)
    }
    catch(err){
        console.log(err)
    }
})()