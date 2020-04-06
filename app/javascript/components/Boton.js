import React, { useState } from 'react'
import ListMovies          from './Home'
import Dialog from '@material-ui/core/Dialog'

const Boton = ( props ) => {
  const {movies:listaDePeliculas=null, url="/movies"} = props  
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
    <button id="btn-create-movie" className="button-create" type="button" onClick={ ()=>setIsOpen(true) }>
      Crear Nueva Película
    </button>
      <Dialog open={isOpen} onClose={ ()=>setIsOpen(false) }>
	  <ListMovies movies={listaDePeliculas} url={url} />
      </Dialog>
    </>
  ) 
}

export default Boton
