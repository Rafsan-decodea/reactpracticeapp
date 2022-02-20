import React from 'react';
import classes from './scoop.module.css';

export const scoop = () => {
  return (
    <div className={[classes.scoop,classes.orange].join(' ')} ></div>
  )
}
