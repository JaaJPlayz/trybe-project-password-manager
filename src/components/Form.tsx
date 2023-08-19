import { useState } from 'react';

function Form() {
  const [hideForm, setHideForm] = useState(true);

  return (
    <div>
      {!hideForm && (
        <form>
          <label>
            Nome do serviço
            <input name="service-name" type="text" />
          </label>

          <label>
            Login
            <input name="login" type="text" />
          </label>

          <label>
            Senha
            <input name="password" type="password" />
          </label>

          <label>
            url
            <input name="url-input" type="text" />
          </label>

          <button type="button">Cadastrar</button>
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
