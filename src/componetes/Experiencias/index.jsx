import React from 'react';
import Card from '../Card';
import './style.css';
import './mobili.css';

export default function SecaoExperienciasTrabalho(props) {
    return(
        <main id='container-principal' className={props.tipoModoTela}>
            <section className='secao-experiencias'>
                <h2>Experiências de Trabalho</h2>
                <div></div>
                <p>Há mais de 10 anos no mercado de Branding, Design Gráfico,
                    Criação de sites e Marketing Digital, nos empenhamos 
                    diariamente para entregar resultados que tragam impacto
                    aos nossos clientes.
                </p>
            </section>
            <section id='secao-cards-props' className={props.tipoModoTela}>
              <Card texto = "JUNHO 2012 - 2016"
                    titulo = "Web Designer"
                    texto1 = "pied piper startUP"
                    texto2 = "Criação de Landing, sites institucionais e E-commerces completamente personalizados e otimizados para buscadores."/>
            
              <Card texto = "AGOSTO 2016 - 2019"
                    titulo = "Product Designer"
                    texto1 = "E corp."
                    texto2 = "Criação de modelos estratégicos de conversão identificando o cliente e mapeando toda a sua jornada de compra."/>
           
              <Card 
                 texto = "FEVEREIRO 2019 - 2021"
                 titulo = "Digital Consulting"
                 texto1 = "Arasak Inc."
                texto2 = "Consultoria em estratégias digitais para todas as etapas do ciclo do projeto, desde a definição inicial até a execução." />
            </section>
        </main>
    )
}