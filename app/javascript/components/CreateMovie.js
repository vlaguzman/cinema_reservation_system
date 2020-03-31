import React, { Component } from 'react'
import classNames from 'classnames'

class CreateMovie extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit} action='/movie' method='post'>
        <h3>Crear Pel√cula</h3>
        <label>Nombre</label>
        <input type='text' name='movie[name]' id='movie_name'></input>
        <label>Descripci√n</label>
        <input type='text' name='movie[description]' id='movie_descrption'></input>
        <label>Imgen</label>
        <input type='text' name='movie[image_url]' id='movie_image_url'></input>
        <input className='button-create' type='submit' value='submit'></input>
        <span>Para ver reflejada la pelicula en la tabla, por favor recarge la pagina</span>
      </form>
    )
  }
}

export default CreateMovie
