import { useContext } from 'react';
import income from '../../assets/income.svg';
import outcome from '../../assets/outcome.svg';
import total from '../../assets/total.svg';
import { TransactionsContext } from '../../TransactionContext';

import * as S from './styles';

export function Summary() {
  const { transactions } = useContext(TransactionsContext);

  const summary = transactions.reduce(
    (acumulator, transaction) => {
      if (transaction.type === 'deposit') {
        acumulator.deposits += transaction.amount;
        acumulator.total += transaction.amount;
      } else {
        acumulator.withdraw -= transaction.amount;
        acumulator.total -= transaction.amount;
      }

      return acumulator;
    },
    {
      deposits: 0,
      withdraw: 0,
      total: 0,
    },
  );

  return (
    <S.Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={income} alt="Entradas" />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(summary.deposits)}
        </strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcome} alt="Saídas" />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(summary.withdraw)}
        </strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={total} alt="Total" />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(summary.total)}
        </strong>
      </div>
    </S.Container>
  );
}
