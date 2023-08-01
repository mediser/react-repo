import React, { useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom';
import RickAndMortyService from '../../services/RickAndMorty.service';

const Detail = () => {

  const [mascota, setMascota] = useState({});
  //hook useParams, saca en este caso el "id" del path
  const { id } = useParams();
  //hook useLocation saca de la URL todo lo siguiente a la raíz (lo sgte. a "http://localhost:3000")
  //const { pathName } = useLocation();

  useEffect(() => {
    RickAndMortyService.getCharactersById(id)
     .then((data) =>setMascota(data) )  
  }, [id])

  return (
    <div className="col">
      <div className="card shadow-sm">
        <img width="25%" src={mascota.image} alt='imagen personaje' />
        <div className="card-body">
          <p className="card-text"> <b>{mascota.name}</b> {mascota.species} </p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">

              <Link to={"/"}>
                  Volver
              </Link>
              
            </div>
            <small className="text-body-secondary">9 mins</small>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail