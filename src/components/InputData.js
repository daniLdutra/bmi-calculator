import React from 'react';
import { Button, Form } from 'react-bootstrap';

class InputData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      peso: '',
      altura: '',
      result: 0,
    };
    this.handleCalculation = this.handleCalculation.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleCalculation(e) {
    e.preventDefault();
    const { peso, altura, result } = this.state;
    const calculation = peso / altura ** 2;
    this.setState({
      result: Math.round(calculation * 100) / 100,
    });
  }

  handleInput({ target }) {
    const { name, value } = target;

    const reg = /^[0-9]*\.?[0-9]*$/;

    if (reg.test(value)) {
      this.setState({
        [name]: value,
      });
    }
  }

  render() {
    const { peso, altura, result } = this.state;
    return (
      <>
        <h1 className="text-center">Calculadora de Indice de Massa Corporal</h1>
        <Form
          style={{
            padding: '4rem',
            margin: '1rem 2rem',
            backgroundColor: 'rgb(184, 159, 235)',
            borderRadius: '0.3rem',
          }}
        >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Peso</Form.Label>
            <Form.Control
              name="peso"
              type="text"
              value={peso}
              placeholder="Coloque seu peso"
              onChange={this.handleInput}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Altura</Form.Label>
            <Form.Control
              name="altura"
              type="text"
              value={altura}
              placeholder="Coloque sua altura"
              onChange={this.handleInput}
            />
          </Form.Group>

          <Button
            onClick={this.handleCalculation}
            variant="primary"
            type="submit"
          >
            Calcular
          </Button>
        </Form>
        {!!result && <h2 className="text-center">O seu IMC é : {result}</h2>}
      </>
    );
  }
}

export default InputData;
