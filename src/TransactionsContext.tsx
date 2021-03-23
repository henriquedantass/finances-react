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
    createTransaction: (transaction: TransactionInput) => Promise<void>;
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


    async function createTransaction(transactionInput: TransactionInput) {

        const response = await api.post('/transactions', {
            ...transactionInput,
            createdAt: new Date()
        });

        const { transaction } = response.data;
        setTransactions([                // conceito de imutabilidade, não posso alterar o estado do componente de
            // mas sim adicionar um novo valor dentro dele. nesse caso eu carreguei todos os dados do arrays 
            // e inseri um novo objeto dentro dele.
            ...transactions, transaction
        ]);
    }

    return (
        <TransactionsContext.Provider value={{ transactions, createTransaction }}>
            {children}
        </TransactionsContext.Provider>
    )

}