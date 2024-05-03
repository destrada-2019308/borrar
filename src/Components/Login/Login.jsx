import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useLogin } from "../../shared/hooks/UseLogin.jsx";

//importe de iconos
import loginIcon from '../../assets/img/logo-image.svg'
import { BoxIcon } from 'boxicons'
import PropTypes from "prop-types"

export const Login = ({ switchAuthAndler }) => {
  
  // ///////////////////////////////////// //
  /*        Codigo para validar datos      */
  // ///////////////////////////////////// //
  const { login, isLoading } = useLogin();
  const [formData, setFormData] = useState({
    email: {
      value: '',
      isValid: false,
      showError: false
    },
    password: {
      value: '',
      isValid: false,
      showError: false
    }
  });

  // Boton para validar la información
  const isSubmitButtonDisable = !formData.email.isValid || !formData.password.isValid;
  
  //No hare un OnBlur (el que cuando te sale marca error) por estetica
  
  //Este es necesario para agregar datos al input
/*   const handleValueChange = (value, field) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: {
        ...prevData[field],
        value
      }
    }));
  }; */
  
  //Este pedira los datos
  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(e)
    if (formData.email.isValid && formData.password.isValid) {
      login(formData.email.value, formData.password.value);
    }
    setFormData({
      email: {
        value: '',
        isValid: false,
        showError: false
      },
      password: {
        value: '',
        isValid: false,
        showError: false
      }
    })
    
  };
  
  
  
  // ///////////////////////////////////// //
  /* Codigo de la animación de los inputs */
  // ///////////////////////////////////// //
  useEffect(() => {
    //Se importa la clase de input
    const inputs = document.querySelectorAll(".form__input");
    //Se agrega la animación para que suba
    function addFocus() {
      let parent = this.parentNode.parentNode;
      parent.classList.add("focus");
    }
    //Funcion para que baje
    function removeFocus() {
      let parent = this.parentNode.parentNode;
      if (this.value === "") {
        parent.classList.remove("focus");
      }
    }

    inputs.forEach(input => {
      input.addEventListener("focus", addFocus);
      input.addEventListener("blur", removeFocus);

      return () => {
        input.removeEventListener("focus", addFocus);
        input.removeEventListener("blur", removeFocus);
      };
    });
  });

  const handleChange = (e)=>{
    console.log(e.target)
    setFormData((prevData)=> (
      {
        ...prevData,
        [e.target.name]: {
          ...prevData[e.target.name],
          value: e.target.value,
          isValid: true
        }
      }
    ))
    console.log(formData);
  }
  
  /* /////////////// */
  /* Este es el JSX*/
  /* /////////////// */
  return (
    <StyledLogin>
      {/* Este es el forms */}
      <div className="l-form">
        {/* Aqui son unos circulitos para la decoración UwU */}
        <div className="shape1"></div>
        <div className="shape2"></div>
        {/* Este es el div donde se encuentra el formulario */}
        <div className="form">
        <div className="form__img-container">
          <img src={loginIcon} alt="" className="form__img" />
        </div>
        <div className="form__content-container">
          <form onSubmit={handleLogin} id='formulario' className="form__content">
            <h1 className="form__title">Welcome to Zaru Travelling</h1>

            <div className="form__div form__div-one">
              <div className="form__icon">
              { /* Icono que exporte de BoxIcons (osea es un icono en vectores)*/}
              <box-icon type='solid' name='user-circle'></box-icon>
              </div>

              {/* Parte de Email*/}
              <div className="form__div-input">
                <label htmlFor="" className="form__label">Email</label>
                <input value={formData.email.value} onChange={handleChange} name='email' type="text" className="form__input" />
              </div>


            </div>

            <div className="form__div">
              <div className="form__icon">
              { /*  Icono de password*/}
              <box-icon type='solid' name='lock-open'></box-icon>
              </div>

              <div className="form__div-input">
                <label htmlFor="" className="form__label">Password</label>
                <input value={formData.password.value} onChange={handleChange} name='password' type="password" className="form__input" />
              </div>
            </div>
            <a href="#" className="form__forgot">Forgot Password?</a>
            {/*Boton de login*/ }
            <button className='form__button' disabled={isSubmitButtonDisable}>Login</button>
            

            <span id='account' onClick={switchAuthAndler}>
            ¿No tienes cuenta? Crea una aca
            </span>
            
          </form>
          </div>
      </div>
    </div>
    </StyledLogin>
  );
};
/* Aqui la proptypes para jalar los datos del backend*/
Login.propTypes = {
  
  switchAuthAndler: PropTypes.func.isRequired
}



export const StyledLogin = styled.div`
  //propiedad para responsive en teléfono
  *, *::before, *::after {
    box-sizing: border-box;
  }

  /* Valores de la resolucion y posición */
  height: 100vh;
  width: 100vw;
  margin: 0 ;
  /* Estilos del div */
  background: var(--background-gradient);
  font-family: var(--body-font);
  display: flex;
  justify-content: center;
  align-items: center;

  /* Textos y enlaces*/
  h1 {
    color: white;
    margin: 0;
  }
  a{
    text-decoration: none;
  }
  /* Formulario en general*/  
  .form {
  width: 100%;
  height: 100%;
  max-width: 400px; 
  margin: 0 auto;   
  align-items: center;
  display: flex;
  justify-content: center;
}


.form__img-container {
  flex: 1;
  margin-left: 10vh;
}

.form__content-container {
  flex: 2; 
  height: 60vh;
  display: block;
}
/* Imagen */
.form__img {
  width: 60vh;
  height: 60vh;
 
}
  /* PARTES DEL COMPONENTE */
  .l-form{
    position: relative;
    height: 100vh;
    overflow: hidden;
    width: 100%;
    
    }
    /* Shapes o circulos difuminados*/
    .shape1 {
    position: absolute;
    width: 50vh;
    height: 50vh;
    border-radius: 50%;
    top: -9rem;
    left: -12.5rem;
    background: linear-gradient(180deg, var(--first-color) 0%, rgba(196, 196, 196, 0) 100%);
  }

  .shape2 {
    position: absolute;
    width: 50vh;
    height: 50vh;
    border-radius: 50%;
    bottom: -9rem;
    right: -12.5rem;
    background: linear-gradient(180deg, var(--first-color) 0%, rgba(196, 196, 196, 0) 100%);
    transform: rotate(180deg);
  }
 /* Formulario de Login */
 /* Esto maneja la parte de la información*/
 .form__content {
    width: 65vh;
    padding: 10vh;    
  }

/* Titulo de la bienvenida */
  .form__title {
    font-size: var(--font-size);
    font-weight: 650;
    margin-bottom: 2rem;
    color: var(--first-color);
  }

  .form__div {
    position: relative;
    display: grid;
    grid-template-columns: 7% 93%;
    margin-bottom: 1rem;
    padding: .25rem 0;
    border-bottom: 1px solid var(--text-color);
  }
  
  /* Div Focus*/
  .form__div.focus .form__icon {
    color: var(--first-color);
  }

  .form__label {
    padding: .1rem;
    display: block;
    position: absolute;
    left: .75rem;
    top: .20rem;
    font-size: var(--normal-font-size);
    color: var(--text-color);
    transition: top 0.3s ease, font-size 0.3s ease, color 0.3s ease; /* Con esto se sube el texto dentro */
}

.form__div.focus .form__label {
    top: -1.0rem;/* Con esto se controla la animación de subida */
    font-size: .875rem;
    color: var(--first-color);
}

  .form__div-input {
    position: relative;
  }

  .form__input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    background: none;
    padding: .5rem .75rem;
    font-size: 1.2rem;
    color: var(--first-color);
    transition: .3s;
  }

  .form__forgot {
    display: block;
    text-align: right;
    margin-bottom: 2rem;
    font-size: var(--normal-font-size);
    color: var(--text-color);
    font-weight: 500;
    transition: .5;
  }

  #account{
    
    display: block;
    text-align: center;
    margin-bottom: 2rem;
    font-size: var(--normal-font-size);
    color: var(--text-color);
    font-weight: 500;
    transition: .5;
  }
  

  .form__forgot:hover {
    color: var(--first-color);
    transition: .5s;
  }

  #account:hover {
    color: var(--first-color);
    transition: .5s;
  }

  
  .form__button {
    width: 100%;
    padding: 1rem;
    font-size: var(--normal-font-size);
    outline: none;
    border: none;
    margin-bottom: 3rem;
    background-color: var(--first-color);
    color: #fff;
    border-radius: .5rem;
    cursor: pointer;
    transition: .3s;
  }

  .form__button:hover {
    box-shadow: 0px 15px 36px rgba(0,0,0,.15);
  }
  /* Icono de user*/
  .form__icon{
    font-size: 1.5rem;
    color: var(--text-color);
    transition: .3s;
}

@media (max-width: 1056px) {
  .form__img-container {
    display: none;
  }
  .shape1 {
    position: absolute;
    width: 40vh;
    height: 40vh;
    border-radius: 50%;
    top: -6rem;
    left: -9.5rem;
    background: linear-gradient(180deg, var(--first-color) 0%, rgba(196, 196, 196, 0) 100%);
  }

  .shape2 {
    position: absolute;
    width: 40vh;
    height: 40vh;
    border-radius: 50%;
    bottom: -8rem;
    right: -8.5rem;
    background: linear-gradient(180deg, var(--first-color) 0%, rgba(196, 196, 196, 0) 100%);
    transform: rotate(180deg);
  }
}

@media (max-width: 480px){
  .form__content-container{
    width: 50vh;
    height: 40vh;
    display: flex;
    align-items: center;
  }
}


`


;

