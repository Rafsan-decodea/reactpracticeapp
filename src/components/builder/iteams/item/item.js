import React from 'react';
import clasess from './item.module.css';

function item() {
    return (

        <div>
            <ul>
                {/* <!-- item start --> */}
                <li className={clasess.item}>
                    <span>Vanilla</span>
                    <span className={clasess.quantity}>2</span>
                    <div className="right">
                        <button type="button" className={[clasess.plus, "rounded"].join(' ')}>+</button>
                        <button type="button"  className={[clasess.minus, "rounded"].join(' ')}>-</button>
                    </div>
                </li>
            </ul>
        </div>




    )
}

export default item