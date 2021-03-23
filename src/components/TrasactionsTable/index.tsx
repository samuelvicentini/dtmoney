import { useEffect } from 'react';
import * as S from './styles';

export function TrasactionsTable() {
  useEffect(() => {
    fetch('http://localhost:3000/api/transactions')
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <S.Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Web Site</td>
            <td className="deposit">R$12.000.00</td>
            <td>Desenvolvimento</td>
            <td>22/03/2021</td>
          </tr>
          <tr>
            <td>BK</td>
            <td className="withdraw">- R$60.00</td>
            <td>Alimentação</td>
            <td>22/03/2021</td>
          </tr>
        </tbody>
      </table>
    </S.Container>
  );
}
