import { useState } from 'react';
import './style.css';
import SecaoBanner from '../Banner';
import SecaoExperienciasTrabalho from '../Experiencias';
import Rodape from '../Rodape';
import logo from '../../assets/logo.png';
import dark from '../../assets/moon.png';
import sun from '../../assets/sun.png';

let topoClaro = 'topo-tema-claro';
let topoEscuro = 'topo-tema-escuro';

let imagemBotao ;
let modoBotao;

let banner;
let experiencias;
let rodape;


export default function Topo() {
    
   const [tipoModoTela, setTipoModoTela] = useState(topoClaro);

   const alteraModoTela = () => {
     if(tipoModoTela === topoClaro){
          setTipoModoTela(topoEscuro)
          banner = 'banner-tema-escuro';
          experiencias = 'experiencias-tema-escuro';
          rodape = 'rodape-tema-escuro';
     }else{
          setTipoModoTela(topoClaro)
          banner = 'banner-tema-claro';
          experiencias = 'experiencias-tema-claro';
          rodape = 'rodape-tema-claro';
     }
    };
    if(tipoModoTela === topoClaro){
          imagemBotao = dark;
          modoBotao = 'botao-tema-escuro';
    }else{
          imagemBotao = sun;
          modoBotao = 'botao-tema-claro';
    }
         
         
    return(
     <div>
         <header className = {tipoModoTela} id='container-topo'>
              <section className='secao-topo'>
                    <img src={logo} alt='Imagem Logo' />
                    <button  onClick={alteraModoTela}><img className={modoBotao} src={imagemBotao} alt = 'Imagem noite' /></button>
              </section>
         </header>
         <SecaoBanner tipoModoTela={banner}/>
         <SecaoExperienciasTrabalho tipoModoTela={experiencias}/>
         <Rodape tipoModoTela={rodape}/>
     </div>
    )
    }