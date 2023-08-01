import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({mascota}) => {
    return (
        <div className="col">
            <div className="card shadow-sm">
                <img className="bd-placeholder-img card-img-top" width="100%" src={mascota.image} alt='imagen personaje' />
                <div className="card-body">
                    <p className="card-text"> <b>{mascota.name}</b> {mascota.species} </p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <button type="button" className="btn btn-sm btn-outline-secondary">
                                <Link to={`/detail/${mascota.id}`} className='nav-link'>
                                    Detalle 
                                </Link>
                            </button>
                            
                        </div>
                        <small className="text-body-secondary">9 mins</small>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
