import { useState } from 'react';

function Form() {
  const [hideForm, setHideForm] = useState(true);
  const [service, setService] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [url, setUrl] = useState('');
  const [enableRegister, setEnableRegister] = useState(true);

  const testPasswordRegex = () => {
    const regex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@#$%^&+=!]).{8,16}$/;
    return regex.test(password);
  };

  const formVerification = () => {
    setEnableRegister(!(
      service !== ''
      && login !== ''
      && url !== ''
      && password !== ''
      && password.length > 8
      && password.length < 16
      && testPasswordRegex()));
  };

  return (
    <div>
      {!hideForm && (
        <form onChange={ () => formVerification() }>
          <label>
            Nome do serviço
            <input
              name="service-name"
              type="text"
              value={ service }
              onChange={ (event) => setService(event.target.value) }
            />
          </label>

          <label>
            Login
            <input
              name="login"
              type="text"
              value={ login }
              onChange={ (event) => setLogin(event.target.value) }
            />
          </label>

          <label>
            Senha
            <input
              name="password"
              type="text"
              value={ password }
              onChange={ (event) => setPassword(event.target.value) }
            />
          </label>

          <label>
            url
            <input
              name="url-input"
              type="text"
              value={ url }
              onChange={ (event) => setUrl(event.target.value) }
            />
          </label>

          <button type="button" disabled={ enableRegister }>Cadastrar</button>
          <button type="button" onClick={ () => setHideForm(!hideForm) }>Cancelar</button>
        </form>
      )}
      {hideForm && (
        <button onClick={ () => setHideForm(!hideForm) }>
          Cadastrar nova Senha
        </button>
      )}
    </div>
  );
}

export default Form;
