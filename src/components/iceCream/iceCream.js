import React from 'react';
import classes from './iceCream.module.css';

const iceCream = () => {
    return (
        <div><div>
            <div className={classes.iceCream}>
                <p className={classes.cone}></p>
                {/* Scoop Component */}
                <div className={classes.cherry}></div>

            </div>
        </div></div>
    )
}

export default iceCream