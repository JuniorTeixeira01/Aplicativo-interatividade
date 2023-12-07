import React from 'react';
import './style.css';
import './mobile.css';
import logo from '../../assets/logo.png';
import ImgFace from '../../assets/facebook.png';
import ImgTwitter from '../../assets/twitter.png';
import ImgLinkedin from '../../assets/linkedin.png';
import ImgBehance from '../../assets/behance.png';
import ImgDrible from '../../assets/dribble.png';
import ImgGoogle from '../../assets/google-plus.png';

export default function Rodape(props) {
    return(
        <footer id='container-rodape' className={props.tipoModoTela}>
            <img src={logo} alt = 'Imagem de logo' />
            <p className='paragrafo-tema-claro paragrafo-tema-escuro'>Ajudamos a criar uma personalidade digital construido sua marca
                no ambiente online utilizando estratégias, ferramentas e 
                tecnologias personalizadas.
            </p>
            <div className='container-img-contatos'>
               <img src={ImgFace} alt = 'Imagem facebook' />
               <img src={ImgTwitter} alt = 'Imagem twiter' />
               <img src={ImgLinkedin} alt = 'Imagem linkedin' />
               <img src={ImgBehance} alt = 'Imagem be' />
               <img src={ImgDrible} alt = 'Imagem drible' />
               <img src={ImgGoogle} alt = 'Imagem google' />
            </div>
            <p>copyrigth 2023 &copy; <span>Junior Teixeira</span></p>
        </footer>
    )
}