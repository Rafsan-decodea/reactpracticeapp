
import React from 'react';
import clasess from './body.moduler.css';
import IceCreamBuilder from '../../containers/iceCreamBuilder/iceCreamBuilder';


const body = () => {
    return (
        <div className={clasess.mainBody}>
            <IceCreamBuilder></IceCreamBuilder>
        </div>
    );
};

export default body;