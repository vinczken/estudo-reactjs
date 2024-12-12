import './index.scss'

import { Link } from 'react-router-dom'

export default function Contact(){


    return ( /* bloco jsx*/
        <div className='page-contact page'>
            <header className='header'>
                <Link to='/'>
                    <i className='fa fa-arrow-left back'></i>
                </Link>
                <h1 className='title'> Contato </h1>
            </header>

            <section className='section'>
                <h1> Entre em Contato! </h1>
                <img className='icon-contact' alt='' src='/assets/images/icon-contato.png' />
            </section>
        </div>
    )
}