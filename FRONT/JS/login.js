import { SERVER_URL } from './config.js';

const mensajeAlerta = "Por favor, completar todos los campos obligatorios";

/*-----------------VALIDACIONES DE CAMPOS INPUT EN FORMULARIO LOGIN ------------- */

const validarUsuarioLogin = () => {
  let elemento = document.querySelector("#loginUsuario").value.trim();
  let validarEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
  if (validarEmail.test(elemento)) {
    return true;
  } else {
    alert("Usuario inválido, corregir");
    return false;
  }
};

const validarPasswordLogin = () => {
  let password = document.querySelector("#loginPassword").value.trim();

  if (password.length === 0) {
    alert("El campo no puede estar vacío");
    return false;
  } else {
    return true;
  }
};

const validarFormLogin = () => {
  return validarUsuarioLogin() && validarPasswordLogin();
};


/*-----------------------ENVÍO FORMULARIO LOGIN -------------------------------*/


document.addEventListener("DOMContentLoaded", () => {
  const formLogin = document.querySelector("#login-form");

  formLogin.addEventListener('submit', async (event) => {
    event.preventDefault();

    if (!validarFormLogin()) {
      return; // No enviar si no es válido
    }

    const usuario = formLogin.querySelector('#loginUsuario').value;
    const password = formLogin.querySelector('#loginPassword').value;

    const datos = {
      usuario: usuario,
      password: password
    };

    console.log(datos);

    try {
      const respuesta = await fetch(`${SERVER_URL}/login-form`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
      });

      if (respuesta.ok) {
        const data = await respuesta.json();
        console.log('Formulario enviado correctamente:', data);

        document.getElementById('contenido').innerText = 'Login exitoso';
        window.location.href = data.redirectUrl;
      } else {
        console.error('Error al enviar el formulario');
        document.getElementById('contenido').innerText = 'Error en el envío del formulario';
      }
    } catch (error) {
      console.error('Error:', error);
      document.getElementById('contenido').innerText = 'Hubo un error en el login';
    }
  });
});