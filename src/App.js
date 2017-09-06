import React, { Component } from 'react';
import Calendar from './components/Calendar';

const style = {
  'marginTop': '50px',
  "textAlign": 'center'
}
class App extends Component {
  render() {
    return (
      <div style={style}>
        <Calendar />
      </div>
    );
  }
}

export default App;
