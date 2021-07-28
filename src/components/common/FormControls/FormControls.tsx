import React, { DetailedHTMLProps, TextareaHTMLAttributes } from 'react';
import style from './FormControls.module.css'

export const Textarea: React.FC<any> = (
    { input, meta, ...props }
) => {
    return (
        <div className={style.formControl + '' + style.error}>
            <div>
                <textarea {...input} {...props} />
            </div>
            <span>some error</span>
        </div>
    )
}