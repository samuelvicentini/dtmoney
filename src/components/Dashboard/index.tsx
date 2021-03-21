import { Summary } from '../Summary';
import { TrasactionsTable } from '../TrasactionsTable';

import * as S from './styles';

export function Dashboard() {
  return (
    <S.Container>
      <Summary />
      <TrasactionsTable />
    </S.Container>
  );
}
