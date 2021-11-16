
import { FormEvent } from 'react';

const utils = {
    
    handleSubmit: (e: FormEvent<HTMLFormElement>) => e.preventDefault(),

    getElement: (id: string) => document.getElementById(id) || document.createElement(id)
}
export default utils;