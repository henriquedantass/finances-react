import Modal from 'react-modal';
import { Container } from './styles';

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

                <input placeholder="Categoria" />

                <button type="submit">Cadastrar</button>

            </Container>
        </Modal>
    )
}