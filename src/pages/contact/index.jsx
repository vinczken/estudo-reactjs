import './index.css'

import { Link } from 'react-router-dom'

export default function Contact(){


    return ( /* bloco jsx*/
        <div className='page-contact'>
            <Link to='/'>
                <i className='fa fa-arrow-left back'></i>
            </Link>
            
            <h1> Contato </h1>
            <img className='icon-contato' alt='' src='/assets/images/icon-contato.png' />
        </div>
    )
}