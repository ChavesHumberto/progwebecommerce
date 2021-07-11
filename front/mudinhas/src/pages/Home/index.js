import React, { useState, useEffect } from 'react'; 
import { TiShoppingCart } from 'react-icons/ti'

import api from '../../services/api'

import './styles.css';
import fplanta from '../../assets/planta.jpg'

export default function Home() {
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        api.get('produtos').then( response => {
            setProdutos( response.data);
        }) 
    },[]);


    return(
        <div className="home">
            <header> 
                <div className="logo">
                <h1>Mudinhas e afins.</h1>
                <p>Horto Online</p>
                </div>
                <button type="button">
                    <TiShoppingCart size={60    } color="gray"/>
                </button>
            </header>
            <div className="gridBox">
                <div className="filtro">
                    <h3>Ordenar por:</h3>
                    <p>Proço:</p>
                    <p>Nome:</p>
                </div>
                <div className="grid">
                    <ul>
                        {produtos.map(produto => (
                            <li key={produto.id}className="itens">
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
        </div>
    );
} 