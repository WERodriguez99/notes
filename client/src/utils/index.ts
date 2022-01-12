
import { FormEvent } from 'react';

const utils = {
    
    logout: () => {
        localStorage.clear();
        return window.location.href = "/"
    },

    handleSubmit: (e: FormEvent<HTMLFormElement>) => e.preventDefault(),

    getElement: (id: string) => document.getElementById(id) || document.createElement(id),
    
    descriptionLength: ( prop: string | undefined, length: number ) => prop && prop.length < length ? prop : `${prop?.slice(0, length)}...`
    ,

    paginate: (page: number, store: number) => {
        const renderNotes = 6;
        const skip = page * renderNotes;
        const page_size = skip + renderNotes;
        let max = store / renderNotes;
        return {
            skip, 
            page_size,
            max: max === 1 || max % 2 === 0 || max % 3 === 0 ? --max : Math.floor(max)
        }
    },
}
export default utils;