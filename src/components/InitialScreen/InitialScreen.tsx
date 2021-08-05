import React from 'react';
import { Preloader } from '../preloader/Preloader';
import s from './InitialScreen.module.css'

export const InitialScreen = () => {
    return (
        <div  className={s.wrapper}>
            <Preloader />
        </div>
    )
}