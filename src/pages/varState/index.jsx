import './index.scss';
import { useState } from 'react';

export default function State(){
    const [counter, setCounter] = useState(0);

    function Add(){
        setCounter(counter + 1);
    }

    function Subtract(){
        setCounter(counter - 1);
    }

    return (
        <div className='page-var-state page'>
            <header className='header'>
                <h1> ReactJS | Variável de Estado </h1>
            </header>

            <div className='section'>
                <h1> Contador </h1>

                <div className='cont'>
                    <button onClick={Add}> + </button>
                    {counter}
                    <button onClick={Subtract}> - </button>
                </div>
            </div>
        </div>
    )
}