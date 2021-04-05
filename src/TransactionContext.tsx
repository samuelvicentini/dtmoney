import { type } from 'node:os';
import { createContext, ReactNode, useEffect, useState } from 'react';

import { api } from './services/api';

interface TransactionsProps {
  id: number;
  title: string;
  type: string;
  category: string;
  amount: number;
  createdAt: string;
}

interface TransactionInput {
  title: string;
  type: string;
  category: string;
  amount: number;
}

interface TransactionsProviderProps {
  children: ReactNode;
}

interface TransactionContextData {
  transactions: TransactionsProps[];
  createdTransaction: (transaction: TransactionInput) => void;
}

export const TransactionsContext = createContext<TransactionContextData>(
  {} as TransactionContextData,
);

export function TransactionProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<TransactionsProps[]>([]);

  useEffect(() => {
    api('transactions').then((response) =>
      setTransactions(response.data.transactions),
    );
  }, []);

  function createdTransaction(transaction: TransactionInput) {
    api.post('/transactions', transaction);
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createdTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
}
