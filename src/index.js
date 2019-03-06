import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Button(props) {
  return (
    <button
      className={props.color}
      onClick={() => props.onClick()}
    >
      {props.buttonText}
    </button>
  );
};

function Message(props) {
  return (
    <h1>
      {props.text}
    </h1>
  );
};

class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      submitted: false,
    }
  }

  handleButtonClick() {
    this.setState({
      submitted: true,
    });
  }

  render() {
    let display;
    if (this.state.submitted === false) {
      display = (
        <Button
          color='blue'
          buttonText="eh"
          onClick={() => this.handleButtonClick()}
          display={!this.state.submitted}
         />
       );
    } else {
      display = (
         <Message
          text='Banana'
          display={this.state.submitted}
         />
      );
    }

    return display;
  }
}

// ========================================

ReactDOM.render(
  <Form />,
  document.getElementById('root')
);
