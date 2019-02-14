import React from 'react';
import axios from 'axios';
// import regeneratorRuntime from 'regenerator-runtime';

// import { hot } from 'react-hot-loader';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 1,
      text: []
    };

    this.clickHandler = this.clickHandler.bind(this);
  }

  async componentDidMount() {
    const getData = await axios.get('http://localhost:3000/posts');
    const data = await getData.data;
    this.setState({
      text: data
    });
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
        <ul>
          {this.state.text.map(text => (
            <li key={text.id}>{text.title}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Counter;
// export default hot(module)(Counter);
