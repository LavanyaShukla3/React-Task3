import React, { Component } from 'react';
import './styles.css';

const arr = ['#ff5733', '#33ff57', '#3366ff', '#ffc733', '#ff33d1', '#33c4ff', '#ffad33', '#a733ff', '#ffa7c7', '#00b894', '#fc5c65', '#6a0572', '#ed4c67', '#574b90', '#f8c291', '#4a235a'];

export class Container extends Component {
  constructor() {
    super();
    this.state = {
      color: '#00b894', // Initial color
      toggle: false,
    };
  }

  handleColor = () => {
    this.setState({
      toggle: !this.state.toggle,
    });
  };

  checkColor = (e) => {
    this.setState({
      color: e.target.style.backgroundColor,
      toggle: false,
    });
  };

  render() {
    return (
      <div className='container'>
        <h2>Color Picker</h2>
        <div className='display'>
          <div className='items'>
            {this.state.toggle ? (
              arr.map((item, index) => (
                <button
                  key={index}
                  onClick={this.checkColor}
                  style={{
                    margin: '5px',
                    border: 0,
                    width: '50px',
                    height: '50px',
                    backgroundColor: item,
                    boxShadow: '2px 2px 10px #3b383a',
                  }}
                ></button>
              ))
            ) : (
              <p></p>
            )}
          </div>
          <div className='pp'>
            <button
              id='clickButton'
              onClick={this.handleColor}
              style={{ backgroundColor: this.state.color }}
            >
              Pick a color
            </button>
          </div>
        </div>
      </div>
    );
  }
}
