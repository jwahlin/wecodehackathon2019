import React from 'react';
import '../styles/index.css';

export default class ListItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      completed: false,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      completed: value
    });
  }

  render() {
    const labelClass = this.state.completed ? 'item done' : 'item';

    return (
      <div className="slim-review">
        <h2>{this.props.opp['Name of the position']}</h2>
        <div>Program Area: {this.props.opp['What program area is this position in?']}</div>
      </div>
      )
    }
}
