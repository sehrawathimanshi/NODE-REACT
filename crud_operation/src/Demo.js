import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './Demo.css';

const Demo = (props) => {
    return <div className="main_div">
    <h1>Hello {props.name}</h1>
</div>
}

export default Demo;