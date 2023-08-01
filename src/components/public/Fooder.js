import React, { useState } from 'react'

const Fooder = () => {

    /*Hook "use State()" evalua estados dentro del componente; usa un array en donde el primer elemento es una variable la cual va a estar sometida a 
      a un estado que saldra de la función que es el segundo elemento del array, lo que está entre 
      paréntesis es como inicia la variable
    */
    const [click, setClicks] = useState(0);    

    const handleClicks = () => {
        setClicks(click+1);
    }

    const year = new Date().getFullYear();

    return (
        <div className="container">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <p className="col-md-4 mb-0 text-body-secondary">&copy; {year} Company, Inc  - Clicks={click}</p>

                <span onClick={handleClicks} > 
                    <img
                        className='App-logo'
                        height="15"
                        src='logo192.png'
                        alt='logo-giratorio'
                    />

                </span>

                <ul className="nav col-md-4 justify-content-end">
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Home</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Features</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Pricing</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">FAQs</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">About</a></li>
                </ul>
            </footer>
        </div>
    )
}

export default Fooder
