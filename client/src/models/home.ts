
import NoteModel from './note';

type HomeModel = {
    _id?: string,
    name?: string,
    pass?: string,
    mail?: string,
    activ?: boolean,
    createdAt?: string,
    updatedAt?: string,
    userNotes?: NoteModel[],
};

export default HomeModel;

