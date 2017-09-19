import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class ControlledInput extends React.Component {
  state = { text: '' };

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    });
  };

  render() {
    return (
      <input type="text"
        value={this.state.text}
        onChange={this.handleChange} />
    );
  }
}

class TrickInput extends React.Component {
  state = {
    text: 'try typing something'
  };

  handleChange = (event) => {
    this.setState({
      text: 'haha nope'
    });
  };

  render() {
    return (
      <input type="text"
        value={this.state.text}
        onChange={this.handleChange} />
    );
  }
}

class NoNumbersInput extends React.Component {
  state = {
    text: 'no numbers allowed'
  };

  handleChange = (event) => {
    this.setState({
      text: event.target.value.replace(/[0-9]/g, '')
    });
  };

  render() {
    return (
      <input type="text"
        value={this.state.text}
        onChange={this.handleChange} />
    );
  }
}

const EasyInput = () => (
  <input type="text" />
);

class SelectDemo extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    age: PropTypes.string
  };

  constructor(props) {
    super(props);
    this.state = {selection: ''};
  }

  handleSelection = (event) => {
    this.setState({selection: event.target.value});
  }

  render() {
    let options = [
      {id: 0, value: '', label: '--'},
      {id: 1, value: 'MA', label: 'Massachusetts'},
      {id: 2, value: 'ME', label: 'Maine'},
      {id: 3, value: 'VT', label: 'Vermont'},
      {id: 4, value: 'NH', label: 'New Hampshire'},
      {id: 5, value: 'RI', label: 'Rhode Island'}
    ];
    return (
      <div>
        <div>The selected value is {this.state.selection || '(nothing)'}</div>
        <select
            value={this.state.selection}
            onChange={this.handleSelection}>
          {options.map(option =>
            <option value={option.value} key={option.id}>
              {option.label}
            </option>
          )}
        </select>
      </div>
    );
  }
}

let Demo = () => (
  <div>
    <div>Here is a controlled input:</div>
    <ControlledInput/>
    <br/><br/>

    <div>Here's a trick input (try typing):</div>
    <TrickInput/>
    <br/><br/>

    <div>This input does not accept numbers:</div>
    <NoNumbersInput/>
    <br/><br/>

    <div>This input is uncontrolled:</div>
    <EasyInput/>
    <br/><br/>

    <div>
      <code>textarea</code> values should be set with the 
      {' '}
      <code>value</code> or <code>defaultValue</code> props, not with children:
    </div>
    <textarea defaultValue="Default value (uncontrolled)"/>
    <br/><br/>

    <div>The <code>select</code> element works differently than in HTML:</div>
    <SelectDemo/>
    <br/><br/>
  </div>
)

ReactDOM.render(<Demo/>, document.querySelector('#root'));

export { Demo };  // for testing
