import React from 'react'; 
import { TiShoppingCart } from 'react-icons/ti'

import './styles.css';
import fplanta from '../../assets/planta.jpg'

export default function Home() {
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
                        <li className="itens">
                            <img src={fplanta} alt="Colar de Perolas"/>
                            <strong>Colar de Pérolas</strong>
                            <p>(Senecio Rowleyanus)</p>
                            <p className="valor">R$:10,00</p>
                            <p className="estoque">37 unid.</p>
                        </li>
                        <li className="itens">
                            <img src={fplanta} alt="Colar de Perolas"/>
                            <strong>Colar de Pérolas</strong>
                            <p>(Senecio Rowleyanus)</p>
                            <p className="valor">R$:10,00</p>
                            <p className="estoque">37 unid.</p>
                        </li>
                        <li className="itens">
                            <img src={fplanta} alt="Colar de Perolas"/>
                            <strong>Colar de Pérolas</strong>
                            <p>(Senecio Rowleyanus)</p>
                            <p className="valor">R$:10,00</p>
                            <p className="estoque">37 unid.</p>
                        </li>
                        <li className="itens">
                            <img src={fplanta} alt="Colar de Perolas"/>
                            <strong>Colar de Pérolas</strong>
                            <p>(Senecio Rowleyanus)</p>
                            <p className="valor">R$:10,00</p>
                            <p className="estoque">37 unid.</p>
                        </li>
                        <li className="itens">
                            <img src={fplanta} alt="Colar de Perolas"/>
                            <strong>Colar de Pérolas</strong>
                            <p>(Senecio Rowleyanus)</p>
                            <p className="valor">R$:10,00</p>
                            <p className="estoque">37 unid.</p>
                        </li>
                        <li className="itens">
                            <img src={fplanta} alt="Colar de Perolas"/>
                            <strong>Colar de Pérolas</strong>
                            <p>(Senecio Rowleyanus)</p>
                            <p className="valor">R$:10,00</p>
                            <p className="estoque">37 unid.</p>
                        </li>
                        <li className="itens">
                            <img src={fplanta} alt="Colar de Perolas"/>
                            <strong>Colar de Pérolas</strong>
                            <p>(Senecio Rowleyanus)</p>
                            <p className="valor">R$:10,00</p>
                            <p className="estoque">37 unid.</p>
                        </li>
                        <li className="itens">
                            <img src={fplanta} alt="Colar de Perolas"/>
                            <strong>Colar de Pérolas</strong>
                            <p>(Senecio Rowleyanus)</p>
                            <p className="valor">R$:10,00</p>
                            <p className="estoque">37 unid.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
} 