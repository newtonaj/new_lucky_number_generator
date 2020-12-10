import React, { Component } from "react";

class SetLimit extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const {
      decrementHandler,
      onFocusSetNumberInput,
      onChangeSetNumber,
      onClickSetNumberInput,
      incrementHandler,
      reset
    } = this.props;
    return (
      <div>
        <p>
          Set a limit. <span className="blue">ex: 70</span>
        </p>
        <button className="btn" onClick={decrementHandler}>
          -
        </button>
        <input
          onFocus={onFocusSetNumberInput}
          type="number"
          onChange={onChangeSetNumber}
          className="displayNumber"
          value={this.props.value}
          onClick={onClickSetNumberInput}
        />
        <button className="btn" onClick={incrementHandler}>
          +
        </button>
        <button className="btn" onClick={reset}>
          Reset
        </button>
      </div>
    );
  }
}

export default SetLimit;
