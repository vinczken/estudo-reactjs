import './index.css'

import { Link } from 'react-router-dom'

export default function Contato(){


    return ( /* bloco jsx*/
        <div className='pagina-contato'>
            <Link to='/'>
            <i className='fa fa-arrow-left voltar'></i>
            </Link>
            
            <h1> Contato </h1>
            <img className='icone-contato' alt='' src='/assets/images/icon-contato.png' />
        </div>
    )
}