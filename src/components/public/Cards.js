import React, { useEffect, useState } from 'react'
import Card from './Card'
import RickAndMortyService from '../../services/RickAndMorty.service';

/* React functional component (rafc (REACT ARROW FUNCTIONAL COMPONENT)) */
const Cards = () => {

    //con "map" creo un nuevo array de mascotas con tantas cartas (Card) como mascotas(personajes) haya
    /*"<Card mascota={m} key={m.id}/>)": a cada Card se le debe pasar una mascota y una key ya q cuando se
    iteran elementos que construyo en base a un componente se le deben pasar esos atributos para que se 
    diferencien
    */

    const [mascotas,setMascotas] = useState([]);

    useEffect(() => {
        RickAndMortyService.getAllCharacters()
            //seteo un nuevo valor en el array mascotas (originalmente vacío) con los personajes de la API
            .then((data)=> setMascotas(data.results))
            .catch((error)=>console.log(error)); 

    }, [mascotas]) // el hook "useEffect" escucha activamente los cambios sobre la variable, en este caso 
                   //mascotas, y hace lo que se le indica

    const cardList = mascotas.map((m)=> <Card mascota={m} key={m.id}/>);

    return (
        <div className="album py-5 bg-body-tertiary">
            <div className="container">

                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    {/*renderizo todas las cards que recibo de la API */}
                    {cardList }
                </div>
            </div>
        </div>
    )
}

export default Cards