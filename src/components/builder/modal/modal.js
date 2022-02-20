import React from 'react';
import clasess from './modal.module.css';

export const modal = ({children}) => {
    return (
       
        <div>
            <div className={clasess.backdrop}></div>
            <div className={clasess.modalBody}>{children}</div>
        </div>
    )
}
