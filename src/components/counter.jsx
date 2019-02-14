import React from 'react';
import axios from 'axios';
// import { hot } from 'react-hot-loader';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 1,
      text: [],
    };

    this.clickHandler = this.clickHandler.bind(this);
  }

  async componentDidMount() {
    try {
      const getData = await axios.get('http://localhost:3000/posts');
      const data = await getData.data;
      this.setState({
        text: data,
      });
    } catch {
      throw new Error("We couldn't get any data!!!!!");
    }
  }

  clickHandler(e) {
    const { number } = this.state;
    const increment = number + 1;
    const decrement = number - 1;
    if (e.target.name === 'increment') {
      this.setState({
        number: increment,
      });
      return;
    }
    this.setState({
      number: decrement,
    });
  }

  render() {
    const { number, text } = this.state;

    return (
      <div>
        <h3>{number}</h3>
        <button type="button" name="increment" onClick={this.clickHandler}>
          +
        </button>
        <button type="button" name="decrement" onClick={this.clickHandler}>
          -
        </button>
        <ul>
          {text.map(arr => (
            <li key={arr.id}>{arr.title}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Counter;
// export default hot(module)(Counter);
