import { useState } from 'react';

function Form() {
  const [hideForm, setHideForm] = useState(true);
  const [service, setService] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [url, setUrl] = useState('');
  const [enableRegister, setEnableRegister] = useState(true);
  const [listOfServices, setListOfServices] = useState([]);
  const [showPassword, setShowPassword] = useState(false);

  const handleDeleteItem = (item) => {
    const newList = listOfServices.filter((element) => element.service !== item);
    if (newList.length === 0) {
      setListOfServices([]);
    } else {
      setListOfServices(newList);
    }
  };

  const handleRegistration = () => {
    const newService = {
      service,
      login,
      password,
      url,
    };
    setListOfServices([...listOfServices, newService]);
    setService('');
    setLogin('');
    setPassword('');
    setUrl('');
    setHideForm(!hideForm);
  };

  const testPasswordRegex = () => {
    const regex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@#$%^&+=!]).{8,16}$/;
    return regex.test(password);
  };

  const results = ['valid-password-check', 'invalid-password-check'];
  const otherResults = ['valid-password-check', 'invalid-password-check'];

  const firstVerification = (pass) => {
    return pass.length > 8 ? otherResults[0] : otherResults[1];
  };

  const secondVerification = (pass) => {
    return pass.length < 16 ? otherResults[0] : otherResults[1];
  };

  const thirdVerification = (pass) => {
    const regex = /^(?=.*[a-zA-Z])(?=.*\d).+$/;
    return regex.test(pass) ? results[0] : results[1];
  };

  const fourthVerification = (pass) => {
    const regex = /.*[!@#$%^&*()_+{}\]:;<>,.?~\\-].*/;
    return regex.test(pass) ? results[0] : results[1];
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    firstVerification(event.target.value);
  };

  const formVerification = () => {
    setEnableRegister(
      !(
        service !== ''
        && login !== ''
        && url !== ''
        && password !== ''
        && password.length > 8
        && password.length < 16
        && testPasswordRegex()
      ),
    );
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
              type="password"
              value={ password }
              onChange={ (event) => handlePasswordChange(event) }
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

          <button
            type="button"
            disabled={ enableRegister }
            onClick={ handleRegistration }
          >
            Cadastrar
          </button>
          <button type="button" onClick={ () => setHideForm(!hideForm) }>
            Cancelar
          </button>
          <div>
            <p className={ firstVerification(password) }>
              Possuir 8 ou mais caracteres
            </p>
            <p className={ secondVerification(password) }>
              Possuir até 16 caracteres
            </p>
            <p className={ thirdVerification(password) }>Possuir letras e números</p>
            <p className={ fourthVerification(password) }>
              Possuir algum caractere especial
            </p>
          </div>

        </form>
      )}
      {hideForm && (
        <button onClick={ () => setHideForm(!hideForm) }>
          Cadastrar nova Senha
        </button>
      )}
      <div>
        {listOfServices.length === 0 ? (
          <p>Nenhuma senha cadastrada</p>
        ) : (
          <ul>
            {listOfServices.map((item, index) => (
              <div key={ index }>
                <li><a href={ item.url }>{ item.service }</a></li>
                <li>{item.login}</li>
                <li>
                  <p>
                    {!showPassword && (item.password)}
                    {showPassword && ('******')}
                  </p>
                </li>
                <br />
                <button
                  onClick={ () => { handleDeleteItem(item.service); } }
                  data-testid="remove-btn"
                >
                  Delete Item
                </button>
              </div>
            ))}
          </ul>
        )}
        <label>
          Esconder senhas
          <input
            type="checkbox"
            onClick={ () => { setShowPassword(!showPassword); } }
          />
        </label>
      </div>
    </div>
  );
}

export default Form;
