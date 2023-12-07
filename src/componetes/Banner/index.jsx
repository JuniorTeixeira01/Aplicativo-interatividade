import React from 'react';
import './style.css';
import './mobili.css';



export default function SecaoBanner(props) {
   
    
    return(
        <div>
            <section className='secao-banner'>
                <div id='container-img-banner' className={props.tipoModoTela}></div>
                <div className='container-texto-banner'>
                    <p>BRANDING | UI | UX | TECNOLOGIA</p>
                    <h2>Agência de Branding</h2>
                    <span>e design digital</span>
                </div>
            </section>
        </div>
    )
}