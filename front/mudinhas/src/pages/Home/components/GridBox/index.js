import React from 'react';

import './styles.css';

import fplanta from '../../../../assets/planta.jpg';

export default function GridBox(props){

    return(
        <div className="gridBox">
        <div className="filtro">
            <h3>Ordenar por:</h3>
            <p>Proço:</p>
            <p>Nome:</p>
        </div>
        <div className="grid">
            <ul>
                {props.produtos.map(produto => (
                    <li key={produto.id} className="itens" onClick={() => props.setVisu(produto.id)}>
                    <img src={fplanta} alt={produto.nome_popular}/>
                    <strong>{produto.nome_popular}</strong>
                    <p>{produto.nome_cientifico}</p>
                    <p className="valor">{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(produto.preco)}</p>
                    <p className="estoque">{produto.estoque} und.</p>
                    </li>
                ))}
            </ul>
        </div>
    </div>
    );
}