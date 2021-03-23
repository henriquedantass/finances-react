import Modal from 'react-modal';

import { FormEvent, useContext, useState } from 'react';
import { TransactionsContext } from '../../TransactionsContext';

import outcomeImg from '../../assets/outcome.svg';
import incomeImg from '../../assets/income.svg';

import { Container, TransactionTypeContainer, RadioBox } from './styles';




interface NewTransactionModalOpenProps {

    isOpen: boolean;
    onRequestClose: () => void;

}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalOpenProps) {
    const { createTransaction } = useContext(TransactionsContext)
    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState(0)
    const [category, setCategory] = useState('')
    const [type, setType] = useState('deposit');

    function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault();
        createTransaction({
            title,
            amount,
            category,
            type,
        })
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-overlay-modal"
            className="react-content-modal"
        >
            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Cadastrar Transação</h2>

                <input
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                    placeholder="Título"
                />

                <input
                    value={amount}
                    onChange={event => setAmount(Number(event.target.value))}
                    type="number"
                    placeholder="Valor"
                />
                <TransactionTypeContainer>

                    <RadioBox
                        activeColor='green'
                        isActive={type === 'deposit'}
                        type="button"
                        onClick={() => { setType('deposit') }}
                    >

                        <img src={incomeImg} alt="Entrada" />
                        <span>Entrada</span>

                    </RadioBox>

                    <RadioBox
                        activeColor='red'
                        isActive={type === 'withdraw'}
                        type="button"
                        onClick={() => { setType('withdraw') }}
                    >

                        <img src={outcomeImg} alt="Saidas" />
                        <span>Saídas</span>

                    </RadioBox>

                </TransactionTypeContainer>
                <input
                    value={category}
                    onChange={event => setCategory(event.target.value)}
                    placeholder="Categoria"
                />

                <button type="submit">Cadastrar</button>

            </Container>
        </Modal>
    )
}