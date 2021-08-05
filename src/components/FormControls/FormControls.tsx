import React, { DetailedHTMLProps, TextareaHTMLAttributes } from 'react';
import style from './FormControls.module.css'



export const Textarea: React.FC<any> = (
    { input, meta, ...props }
) => {
    const isError = meta.touched && meta.error;
    return (
        <div>
            <div>
                <textarea
                    {...input}
                    {...props} />
            </div>
            {isError && <span className={style.span}>{meta.error}</span>}

        </div>
    )
}


export const Input: React.FC<any> = (
    { input, meta, ...props }
) => {
    const isError = meta.touched && meta.error;
    return (
        <div>
            <div>
                <input
                    {...input}
                    {...props} />
            </div>
            {isError && <span className={style.span}>{meta.error}</span>}

        </div>
    )
}


