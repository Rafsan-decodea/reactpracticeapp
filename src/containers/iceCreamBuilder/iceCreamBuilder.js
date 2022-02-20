import React, { Component } from 'react';
import IceCream from '../../components/iceCream/iceCream';
import Builder from '../../components/builder/builder';
import classes from './iceCreamBuilder.module.css';
export default class iceCreamBuilder extends Component {
    state = {};
    render() {
        return (

            <div className={['container', classes.container].join(' ')}>

                <IceCream></IceCream>
                <Builder></Builder>
            </div>
        )
    }
}
