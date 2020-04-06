import React, { Component } from "react"
import Modal                from './Modal'
import ReactDOM             from "react-dom"

class MoviesHeader extends Component {
  state = { show: false };

  showModal = () => {
      this.setState({ show: true });
    };

  hideModal = () => {
      this.setState({ show: false });
    };

  render() {
      return (
        <main>
          <h1>Todas las Películas</h1>
            <Modal show={this.state.show} handleClose={this.hideModal}>
              <p>Modal</p>
              <p>Data</p>
            </Modal>
          <button id="btn-create-movie" class="button-create" type="button" onClick={this.showModal}>
            Crear Nueva Película
          </button>
        </main>
      );
    }
}

const container = document.createElement("div");
document.body.appendChild(container);
ReactDOM.render(<MoviesHeader />, container);

export default MoviesHeader
