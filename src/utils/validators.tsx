import React from 'react';
import { Field } from 'redux-form';

export const required = (value: string) => {
    if (value) return undefined;
    return 'Field is required';
}


export const maxLengthCreator = (maxLength: number) => (value: string) => {
    if (value && value.length > maxLength) return `Max length is ${maxLength} simbols!`;
    return undefined;
}

export const createField = (placeholder: string | null, name: string, component: any, validator: any, props: any = {}, text: string = "") => {
    return <div>
        <Field
            placeholder={placeholder}
            name={name}
            component={component}
            validate={validator}
            {...props}
        /> {text}
    </div>
}