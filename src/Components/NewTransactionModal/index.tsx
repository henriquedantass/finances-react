import Modal from 'react-modal';
import { Container, TransactionTypeContainer, RadioBox } from './styles';
import outcomeImg from '../../assets/outcome.svg';
import incomeImg from '../../assets/income.svg';
import { useState } from 'react';

interface NewTransactionModalOpenProps {

    isOpen: boolean;
    onRequestClose: () => void;

}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalOpenProps) {

    const [type, setType] = useState('deposit');

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-overlay-modal"
            className="react-content-modal"
        >
            <Container>
                <h2>Cadastrar Transação</h2>

                <input placeholder="Título" />

                <input type="number" placeholder="Valor" />
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
                <input placeholder="Categoria" />

                <button type="submit">Cadastrar</button>

            </Container>
        </Modal>
    )
}