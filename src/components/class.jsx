import React from 'react';

class Class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 5,
      str: 'str!!!',
      arr: [1, 2, 3],
      boo: true,
      obj: {
        number: 1,
        strings: 'strrr',
        boolean: false,
      },
    };

    this.changeStrings = this.changeStrings.bind(this);
  }

  changeStrings() {
    const { str } = this.state;
    this.setState({
      str: `${str}change`,
    });
  }

  render() {
    const { num, str, arr, boo, obj } = this.state;

    return (
      <div className="hooks">
        <h2>ddd</h2>
        <button type="button" onClick={() => this.setState({ num: num + 1 })}>
          num
        </button>
        <p>{num}</p>
        <button type="button" onClick={this.changeStrings}>
          strings
        </button>
        <p>{str}</p>
        <button
          type="button"
          onClick={() => this.setState({ arr: arr.concat(4) })}
        >
          array
        </button>
        <p>{arr}</p>
        <button type="button" onClick={() => this.setState({ boo: !boo })}>
          boolean
        </button>
        <p>{boo ? 'true' : 'false'}</p>
        <button
          type="button"
          onClick={() =>
            this.setState({
              obj: {
                ...obj,
                number: obj.number + 1,
                strings: `${obj.strings}ddd`,
              },
            })
          }
        >
          object
        </button>
        <p>{`number:${obj.number}`}</p>
        <p>{`strings:${obj.strings}`}</p>
      </div>
    );
  }
}

export default Class;
