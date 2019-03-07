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
      messageText: 'I am Submit',
    });
  }

  render() {
    let display;
    if (this.state.submitted === true) {
      display = (
         <Message
          text={this.state.messageText}
         />
      );
    } else {
      display = (
        <Button
          color='blue'
          buttonText="Submit Me!"
          onClick={() => this.handleButtonClick()}
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
