import { ChangeEvent, useEffect, useMemo, useState } from 'react';

interface Values {
    name?: string;
    email: string;
    password: string;
}

const initialValues: Values = {
    name: '',
    email: '',
    password: '',
};

export const useForm = (initialForm: Values, formValidations: any = {}) => {
    const [formState, setFormState] = useState<Values>(initialForm);
    const [formValidation, setFormValidation] = useState({})

    useEffect(() => {

        createValidators();

    }, [formState])

    const isFormValid = useMemo(() => {

        for (const formValue of Object.keys(formValidation)) {
            if (formValidation[formValue] !== null) return false;
        }

        return true;
    }, [formValidation])

    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const onResetForm = () => {
        setFormState(
            initialValues);
    };

    const createValidators = () => {
        
        const formCheckedValues = {};

        for (const formField of Object.keys(formValidations)) {

            const [fn, errorMessage = 'Este campo es requerido'] = formValidations[formField]

            formCheckedValues[`${formField}Valid`] = fn(formState[formField]) ? null : errorMessage;

        }

        setFormValidation(formCheckedValues);

        // console.log(formCheckedValues)

    }

    return {
        ...formState,
        ...formValidation,
        formState,
        onInputChange,
        onResetForm,
        isFormValid
    };
};