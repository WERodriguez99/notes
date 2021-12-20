
import IRegister from '../models/register'

export const regex = {
    //name: /^[a-zA-Z]/,
    mail: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    pass: /^.{8,}$/,
}

const validate = {

    err: ( state: any, key: string ) => {
        let err: any = {
            name: (() => !state[key] && `${key} is required`)(),
            
            mail: !state[key] ? `${key} is required` : !regex.mail.test(state.mail) && `${key} invalid, Example: MyNotes@gmail.com`,

            pass: !state[key] ? `${key} is required` :  !regex.pass.test(state.pass) && `${key} more than 8 characters`,

            
        }

        return err[key as keyof IRegister]
    }
}

export default validate;