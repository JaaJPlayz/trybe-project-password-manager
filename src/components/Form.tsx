function Form() {
  return (
    <div>
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

        <button>Cadastrar</button>
        <button>Cancelar</button>

      </form>
    </div>
  );
}

export default Form;
