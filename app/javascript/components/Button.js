import React, { useState } from 'react'
import CreateMovie         from './CreateMovie'
import classNames          from 'classnames'
import $                   from 'jquery'
import Dialog              from '@material-ui/core/Dialog'


const Button = ( props ) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleSubmit = (event) => {
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
    }).done(requestMovies())
  }

  const requestMovies = () => {
    $.ajax({
      type: 'GET',
      dataType: 'json',
      url: '/'
    })
  }

  return (
    <section clasName="header-movies">
      <h2 id="movies-title">Películas</h2>
      <button id="btn-create-movie" className="button-create" type="button" onClick={ ()=>setIsOpen(true) }>
        Crear Nueva Película
      </button>
      <Dialog open={isOpen} onClose={ ()=>setIsOpen(false) }>
          <CreateMovie 
            handleSubmit={ handleSubmit.bind(this) }
          />
      </Dialog>
    </section>
  ) 
}

export default Button
