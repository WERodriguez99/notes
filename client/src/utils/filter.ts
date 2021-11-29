
import modelNotes from '../models/note';

const filter = ( notes: modelNotes[], filter: string ) => {

    switch(filter) {
        case 'AtoZ':
            return notes.sort((a, b) => a.title > b.title ? 1 : -1 || 0);
        case 'ZtoA':
            return notes.sort((a, b) => a.title < b.title ? 1 : -1 || 0);
        case 'recent':
            return notes.sort((a, b) => a.createdAt < b.createdAt ? 1 : -1 || 0);
        case 'oldest':
            return notes.sort((a, b) => a.createdAt > b.createdAt ? 1 : -1 || 0);
        default: 
            return notes
    } 
}
export default filter