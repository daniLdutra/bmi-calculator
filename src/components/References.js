import React from 'react';
import { Table } from 'react-bootstrap';

class References extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <table class="table table-dark">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Classificação</th>
              <th scope="col">IMC</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Abaixo do Peso</td>
              <td>18.5 - 24.9</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Peso Normal</td>
              <td>18.5 - 24.9</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Sobrepeso</td>
              <td>25 - 29.9</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Obesidade Grau I</td>
              <td>30 - 34.9</td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>Obesidade Grau II</td>
              <td>35 - 39.9</td>
            </tr>
            <tr>
              <th scope="row">6</th>
              <td>Mórbida</td>
              <td>Maior ou igual 40</td>
            </tr>
          </tbody>
        </table>
      </>
    );
  }
}

export default References;
