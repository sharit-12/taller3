import React, { Component } from 'react';

class ContadorClase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0
    };
  }

  // Usamos la función de setState que recibe el estado anterior
  incrementar = () => {
    this.setState((prevState) => ({
      contador: prevState.contador + 1
    }));
  };

  render() {
    return (
      <div>
        <h2>Contador: {this.state.contador}</h2>
        <button onClick={this.incrementar}>Incrementar</button>
      </div>
    );
  }
}

export default ContadorClase;

