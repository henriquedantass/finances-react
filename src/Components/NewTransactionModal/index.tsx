import Modal from 'react-modal';
import { Container, TransactionTypeContainer } from './styles';
import outcomeImg from '../../assets/outcome.svg';
import incomeImg from '../../assets/income.svg';

interface NewTransactionModalOpenProps {

    isOpen: boolean;
    onRequestClose: () => void;

}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalOpenProps) {
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
                    <button type="button">
                        <img src={incomeImg} alt="Entrada" />
                        <span>Entrada</span>
                    </button>
                    <button type="button">
                        <img src={outcomeImg} alt="Saidas" />
                        <span>Saídas</span>
                    </button>
                </TransactionTypeContainer>
                <input placeholder="Categoria" />

                <button type="submit">Cadastrar</button>

            </Container>
        </Modal>
    )
}