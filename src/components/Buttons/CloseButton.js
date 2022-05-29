import React from 'react';
import './CloseButton.js';
import './Button.css';

export default class CloseButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div className='close-button-container'>
                    <div className='close-button'>
                    <svg fill={this.props.color} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width={this.props.width} height={this.props.height}><path d="M 4.9902344 3.9902344 A 1.0001 1.0001 0 0 0 4.2929688 5.7070312 L 10.585938 12 L 4.2929688 18.292969 A 1.0001 1.0001 0 1 0 5.7070312 19.707031 L 12 13.414062 L 18.292969 19.707031 A 1.0001 1.0001 0 1 0 19.707031 18.292969 L 13.414062 12 L 19.707031 5.7070312 A 1.0001 1.0001 0 0 0 18.980469 3.9902344 A 1.0001 1.0001 0 0 0 18.292969 4.2929688 L 12 10.585938 L 5.7070312 4.2929688 A 1.0001 1.0001 0 0 0 4.9902344 3.9902344 z"/></svg>
                    </div>
                </div>);
    } 
}