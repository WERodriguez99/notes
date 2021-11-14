
import { FormEvent } from 'react';

const utils = {
    handleSubmit: (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }
} 

export default utils;