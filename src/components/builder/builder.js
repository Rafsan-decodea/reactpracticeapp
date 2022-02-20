import React from 'react'
import clasess from './builder.module.css';
import Items from './iteams/items';
function builder() {
    return (
        <div>
            <div className={clasess.builder}>
                <h3>Build your own Ice Cream Sundae</h3>

                {/* iteams */}
                <Items></Items>

                {/* <!-- total price start --> */}

                {/* total price */}

                {/* <!-- total price end --> */}
                <button type="button" className={[clasess.order, 'rounded'].join(' ')}>
                    Add to Cart
                </button>
            </div>
        </div>
    )
}

export default builder