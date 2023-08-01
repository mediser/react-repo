import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useUserForm } from '../../hooks/Custom.hook'

const UseForm = () => {

  const{form,setForm,handleChanges}  = useUserForm();
  //Hook para ver si las contraseñas son iguales
  const [areEquals, setAreEquals] = useState(true);

  //Hook para atrapar la contraseña de confirmación
  const [passwordConfirmation, setPasswordConfirmation] = useState();

  //funcion para setear la contraseña de confirmación
  const handlePasswordConfirmation = (e) =>{
    setPasswordConfirmation(e.target.value);
  }

  useEffect(() => {
    //destructuring de form saco el password
    const {password} = form;
    setAreEquals(password === passwordConfirmation);
  }, [passwordConfirmation])
  
  //atrapa el envío del formulario
  const handleSubmit = (e)=>{
    //para que no se recargue la pagina
    e.preventDefault();
    //muestro el form
    console.log(form);
  }

  return (
   
    <div className="col-lg-6 col-md-8 mx-auto">
      <div className="col-md-7 col-lg-8">
        <br/>
        <h4 className="mb-3">REGISTRARSE</h4>
        <form className="needs-validation" novalidate>
          <div className="row g-3">
            
            <div className="col-8">
              <label for="email" className="form-label">Email </label>
              <input type="email" 
              className="form-control" 
              id="email" 
              placeholder="you@example.com" 
              name='email'
              //escucha cualquier cambio q haya en el input y llama a la función
              onChange={handleChanges}/>
              <div className="invalid-feedback">
                Please enter a valid email address .
              </div>
            </div>

            <div className="col-8">
              <label for="address" className="form-label">Clave</label>
              <input type="password" 
              className="form-control"  
              required
              name='password'
              onChange={handleChanges}/>
            </div>

            <div className="col-8">
              <label for="address" className="form-label">Repetir Clave</label>
              <input type="password" 
              className="form-control"   
              required
              onChange={handlePasswordConfirmation} />
            <br/>
            <br/>
              {/*condicional en JSX*/}
              { !areEquals &&(
                <div>
                  Las Claves no son iguales...
                </div>)
              }
            </div>
          </div>
          <br/>

          <button 
            disabled={!areEquals}
            className="w-120 btn btn-primary btn-lg" 
            type="submit" 
            onClick={handleSubmit}>
                REGISTRARME
          </button>
        </form>
        <br/>
        <div className="btn-group">
              <Link to={"/"}>
                Volver
              </Link>
        </div>

      </div>
    </div>

  )
}

export default UseForm
