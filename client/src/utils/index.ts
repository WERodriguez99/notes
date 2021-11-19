
import { FormEvent } from 'react';

const utils = {
    
    logout: () => {
        localStorage.clear();
        return window.location.href = "/"
    },

    handleSubmit: (e: FormEvent<HTMLFormElement>) => e.preventDefault(),

    getElement: (id: string) => document.getElementById(id) || document.createElement(id),
    
    descriptionLength: ( prop: string | undefined, length: number ) => {
        return () => prop && prop.length < length ? prop : `${prop?.slice(0, length)}...`;
    },

    paginate: (p: number) => {
        const notesRender = 6
        let page = p+1
        return {
            page_size: notesRender * page,
            skip: (page - 1) * notesRender
        }
    }

}
export default utils;