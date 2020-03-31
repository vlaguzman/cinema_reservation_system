import React, { Component } from 'react'
import CreateMovie          from './CreateMovie'
import classNames           from 'classnames'
import $                    from 'jquery'

class ListMovies extends Component {
  constructor(props) {
    super(props)

    this.state = {
      movies: props.movies,
    }
  }

  handleDelete(id_movie) {
    $.ajax({
      type: "DELETE",
      data: { authenticity_token: $('[name="csrf-token"]')[0].content, id: id_movie },
      url: this.props.url,
      success: this.updateMovies(id_movie)
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const target = event.target
    const data = {
      movie: {
        name: target[0].value,
        description: target[1].value,
        image_url: target[2].value,
      }
    }
    const dataTransform = JSON.stringify(data)

    $.ajax({
      type: 'POST',
      url: '/movie',
      data: dataTransform,
      contentType: 'application/json',
      dataType: 'json'
    }).done(this.requestMovies())
  }

  requestMovies() {
    $.ajax({
      type: 'GET',
      dataType: 'json',
      url: '/'
    })
  }

  updateMovies(id_movie_deleted) {
    const movies = this.state.movies;
    let new_movies = movies.filter((movie, index, arr) => {
      return movie.id != id_movie_deleted
    })
    this.setState({movies: new_movies})
  }

  renderMovies() {
    const movies = this.state.movies
    return movies.map((value, index) => {
      return (
        <tr>
          <td>{value.name}</td>
          <td>{value.description}</td>
          <td>
            <button className='button-delete' onClick={ this.handleDelete.bind(this, value.id) }>Eliminar</button>
          </td>
        </tr>
      )
    })
  }

  render() {
    return (
      <div className='content-boxs'>
        {
          <CreateMovie 
            handleSubmit={ this.handleSubmit.bind(this) }
          />
        }
        <table>
          <tbody>
            <tr>
              <th>Nombre</th>
              <th>Descripción</th>
              <th>Acciones</th>
            </tr>
            { this.renderMovies() }
          </tbody>
        </table>
      </div>
    )
  }
}

export default ListMovies
