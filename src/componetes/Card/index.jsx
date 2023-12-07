import React from 'react';
import './style.css';
import './mobili.css';

export default function Card(props) {
    return(
        <div id='secao-card' className={props.tipoModoTela}>
           <section className='cards'>
              <p className={props.tipoModoTela}>  {props.texto} </p>
              <h2 className={props.tipoModoTela}> {props.titulo} </h2>
              <p className='texto-description1'> {props.texto1} </p>
              <p className='texto-description2'> {props.texto2} </p>
           </section>
       </div>
    )
}