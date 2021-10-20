const utils = {
    handleChange: (e, state, setState) => {
        const id = e.target.id || e.target.name;
        const value = e.target.value;

        setState({...state, [id]: value})
    },

    handleSubmit: e => {
        e.preventDefault();
    }
}

export default utils