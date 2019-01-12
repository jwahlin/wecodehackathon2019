import React from 'react';
import '../styles/ListItem.css';

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
      <div>
        <h2>{this.props.opp['Name of the position']}</h2>
      </div>
      )
    }
}
