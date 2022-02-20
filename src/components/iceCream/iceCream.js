import React from 'react';
import classes from './iceCream.module.css';
import Scoop from './scoop/scoop';
const iceCream = () => {
    return (
        <div><div>
            <div className={classes.iceCream}>
                <p className={classes.cone}></p>
                {/* Scoop Component */}
                <Scoop></Scoop>
                <div className={classes.cherry}></div>

            </div>
        </div></div>
    )
}

export default iceCream