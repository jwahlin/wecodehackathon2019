import React, { Component } from 'react';
import '../styles/App.css';
import ListItem from './ListItem.js';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
        opps: [],
      }
  }

  componentDidMount() {
    this.updateVolunteerOpps();
  }

  updateVolunteerOpps() {
    this.callApi()
      .then(res => this.setState({ opps: res }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/filterOpps');

    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  listOpps = () => {
    let listOpps = []
    for (let i = 0; i < this.state.opps.length; i++) {
        let currentOpp = this.state.opps[i]
        listOpps.push(<ListItem
            opp={currentOpp}
        />)
    }

    return listOpps;
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Volunteer Listings</h1>
        </header>
        <div className="volunteer-listings">
        {this.listOpps()}
        </div>
      </div>
    );
  }
}

export default App;
