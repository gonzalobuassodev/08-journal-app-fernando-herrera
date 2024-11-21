import { ChangeEvent, useEffect, useMemo, useState } from 'react';

type FieldValues = Record<string, any>;

export const useForm = <T extends FieldValues>(initialForm: T, formValidations?: [T]) => {
    const [formState, setFormState] = useState(initialForm as T);
    const [formValidation, setFormValidation] = useState({} as T);

    useEffect(() => {
        setFormState(initialForm);
    }, [initialForm])

    useEffect(() => {

        if (formValidations !== undefined) createValidators();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [formState, formValidations])

    const isFormValid = useMemo(() => {

        for (const formValue of Object.keys(formValidation)) {
            if (formValidation[formValue] !== null) return false;
        }

        return true;
    }, [formValidation])

    const onInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const onResetForm = () => {
        // setFormState(
        //     initialValues);
    };

    const createValidators =() => {

        if (formValidations === undefined) return;

        const formCheckedValues = {} as T;

        for (const formField of Object.keys(formValidations[0])) {
            const [fn, errorMessage = 'Este campo es requerido'] = formValidations[0][formField] || [];

            if (fn) {
                formCheckedValues[`${formField}Valid`] = fn(formState[formField]) ? null : errorMessage;
            }
        }

        setFormValidation(formCheckedValues);
    };

    return {
        ...formState,
        ...formValidation,
        formState,
        onInputChange,
        onResetForm,
        isFormValid
    };
};