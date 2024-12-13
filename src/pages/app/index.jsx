import './index.scss';

import { Link } from 'react-router-dom';

export default function App() {
  return (
    <div className="page-app page">
      <header className='header'>
        <h1>
          Minha Página Top!
        </h1>
      </header>

      <section className='section'>
        <h1> Título </h1>

        <input type='text' placeholder='Digite aqui'/>
        <br /><br />
        <select>
          <option>Item 1</option>
          <option>Item 2</option>
          <option>Item 3</option>
        </select>
        <br /><br />

        <button> Clique aqui </button>
        <ul>
          <li>
            <Link to='/contact'>Ir para Contato</Link>
          </li>
          <li>
            <Link to='/eventos'>Ir para Eventos</Link>
          </li>
        </ul>
      </section>

    </div>
  );
}

