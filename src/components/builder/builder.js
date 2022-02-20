import React from 'react'
import clasess from './builder.module.css';
import Items from './iteams/items';
import TotalPrice from './totalprice/totalprice';
import Modal from './modal/modal';

function builder() {
    return (
        <div>
            <div className={clasess.builder}>
                <h3>Build your own Ice Cream Sundae</h3>

                {/* iteams */}
                <Items></Items>

                {/* <!-- total price start --> */}
                <TotalPrice></TotalPrice>

                {/* total price */}

                {/* <!-- total price end --> */}
                <button type="button" className={[clasess.order, 'rounded'].join(' ')}>
                    Add to Cart
                </button>
            </div>
            <Modal>
                Hello Modal

            </Modal>
        </div>
    )
}

export default builder