import {useState} from 'react';


// this hook is used to convert a name to a value
// this will make our login and registering easier, as we can use the same hook for both
export const useForm = (callback: () => void, initialState = {}) => {
    const [values, setValues] = useState(initialState);

    const onChange = (event: { target: { name: any; value: any; }; }) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    };

    const onSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        callback();
    };

    return {
        onChange,
        onSubmit,
        values
    }
}