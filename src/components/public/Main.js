/* Class Component (rce) */

import React, { Component } from 'react'
import Cards from './Cards';
import RickAndMortyService from '../../services/RickAndMorty.service';


export class Main extends Component {
    //cada vez q se usa un constructor dentro de un class component (o main comp) se necesita usar props y 
    //super
    constructor(props) {
        super(props);
        //seteo el estado inicial del array de mascotas en vacio
        this.state = {mascotas: []}
    }

    componentDidMount() {

        /*//llamo al service
        RickAndMortyService.getAllCharacters()
            //seteo un nuevo valor en el state (originalmente vacío) con los personajes de la API
            .then((data)=> this.setState({mascotas: data.results}))
            .catch((error)=>console.log(error));
        */
    }

    render() {
        return (
            <main>

                <section className="py-5 text-center container">
                    <div className="row py-lg-5">
                        <div className="col-lg-6 col-md-8 mx-auto">
                            <h1 className="fw-light">Album example</h1>
                            <p className="lead text-body-secondary">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
                            <p>
                                <a href="#" className="btn btn-primary my-2">Main call to action</a>
                                <a href="#" className="btn btn-secondary my-2">Secondary action</a>
                            </p>
                        </div>
                    </div>
                </section>

                <Cards />
                
            </main>
        )
    }
}

export default Main
