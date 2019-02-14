import React from 'react';
// import { hot } from 'react-hot-loader';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 1
    };

    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(e) {
    const increment = this.state.number + 1;
    const decrement = this.state.number - 1;
    if (e.target.name === 'increment') {
      this.setState({
        number: increment
      });
      return;
    }
    this.setState({
      number: decrement
    });
  }

  render() {
    return (
      <div>
        <h3>{this.state.number}</h3>
        <button type="button" name="increment" onClick={this.clickHandler}>
          +
        </button>
        <button type="button" name="decrement" onClick={this.clickHandler}>
          -
        </button>
      </div>
    );
  }
}

export default Counter;
// export default hot(module)(Counter);
