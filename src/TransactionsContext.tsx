import { createContext, useEffect, useState, ReactNode } from 'react'
import { api } from './Services/api';

interface Transaction {
    id: number;
    title: string;
    category: string;
    amount: number;
    createdAt: string;
    type: string;
}

interface TransactionInput {
    title: string;
    category: string;
    amount: number;
    type: string;
}

interface TransactionsProviderProps {
    children: ReactNode
}

interface TransactionsContextData {
    transactions: Transaction[];
    createTransaction: (transaction: TransactionInput) => void;
}

export const TransactionsContext = createContext<TransactionsContextData>(

    {} as TransactionsContextData
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {

    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        api.get('/transactions')
            .then(response => setTransactions(response.data.transactions))
    }, []);


    function createTransaction(transaction: TransactionInput) {

        api.post('/transactions', transaction)
    }

    return (
        <TransactionsContext.Provider value={{ transactions, createTransaction }}>
            {children}
        </TransactionsContext.Provider>
    )

}