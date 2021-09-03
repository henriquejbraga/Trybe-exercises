import React from 'react'

class Form extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      email: '',
      cpf: '',
      endereço: '',
      cidade: '',
      estado: '',
      tipo: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

    handleChange ({ target }) {
      const value = target.name === 'name' ? target.value.toUpperCase() : target.value
      
      this.setState ({
        [target.name]: value
      });
    }
  
  render() {
    const { name, email, cpf, endereço, cidade, estado, tipo} = this.state
    return(
      <div> Formulario exercicio
        <form className="form">
          <fieldset>
            <label>
              Nome
              <input name="name" type="text" onChange={ this.handleChange } value={ name } maxLength="40"
                required/>
            </label>
            <label>
              Email
              <input name="email" type="text" onChange={this.handleChange } value={ email } maxLength="50" required/>
            </label>
            <label>
              CPF
              <input name="cpf" type="text" onChange={this.handleChange } value={ cpf } maxLength="11" required/>
            </label>
            <label>
              Endereço
              <input name="endereço" type="text" onChange={this.handleChange } value={ endereço } maxLength="200" required/>
            </label>
            <label>
              Cidade
              <input name="cidade" type="text" onChange={this.handleChange } value={ cidade} maxLength="28" required/>
            </label>
            <label>
              Estado
              <input name="estado" type="text" onChange={this.handleChange } value={ estado } required/>
            </label>
            <label>
              Tipo
              <input name="tipo" type="text" onChange={this.handleChange } value={ tipo } required/>
            </label>
          </fieldset>
        </form>
      </div>
    )
  }
}

export default Form