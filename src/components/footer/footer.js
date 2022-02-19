import React, { Component } from 'react';
import clasess from './footer.module.css';

const footer = () => {
  return (
    <footer>
      <div className={['container', clasess.container].join(' ')} >
        <div>
          Copyright &copy;2020.
        </div>
        
      </div>
    </footer>
  )
}

export default footer