import { useEffect } from 'react';
import { api } from '../../Services/api';
import { Container } from './styles';


export function TransactionsTable() {

    useEffect(() => {
        api.get('/transactions')
            .then(response => console.log(response.data))
    }, []);

    return (

        <Container>
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
                        <td>Aluguel</td>
                        <td className="withdraw">-R$500</td>
                        <td>Casa</td>
                        <td>01/04/2021</td>
                    </tr>
                    <tr>
                        <td>Salário</td>
                        <td className="deposit">R$2.500</td>
                        <td>Desenvolvimento</td>
                        <td>01/04/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>

    )
}