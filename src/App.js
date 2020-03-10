import React from 'react';
import './App.css';

const AppContext = React.createContext();

/**
 passing ke box tiga tanpa melewati props box satu dan box dua menggunakan context
 
--- BOX SATU
------------- BOX DUA
---------------------- BOX TIGA

*/


function BoxDua() {
  return (
    <div className="BoxDua">
      <p> BOX DUA</p>
      <BoxTiga />
    </div>
  )
}

function BoxTiga() {
  return (
    <div className = "BoxTiga">
      <p> BOX TIGA</p>
      <p className="text">
        <AppContext.Consumer>{ context => context.number }</AppContext.Consumer>
      </p>
    </div>
  )
}

function App() {
    return (
      <AppProvider>
        <div className="Satu">
          <p>BOX SATU</p>
            <BoxDua />          
        </div>
      </AppProvider>
    );
}

class AppProvider extends React.Component {
  state = {
    number: 14
  }

  render() {
    return (
      <AppContext.Provider value={this.state} >
          <p>{this.props.children}</p>
      </AppContext.Provider>
    )
  }
}

export default App;
