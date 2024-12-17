import './index.scss';
import { useState } from 'react';

export default function State(){
    const [counter, setCounter] = useState(0);
    const [titleS2, setTitleS2] = useState('Oie');
    const [titleS3, setTitleS3] = useState('Selecione um item');
    const [filledOptionS4, setFilledOptionS4] = useState(false);
    const [titleS5, setTitleS5] = useState('Oie');
    const [descriptionS5, setDescriptionS5] = useState('Oie');
    
    function Add(){
        setCounter(counter + 1);
    }

    function Subtract(){
        setCounter(counter - 1);
    }

    function ChangeTitleS2(e){
        let newValue = e.target.value;
        setTitleS2(newValue);
    }

    function ChangeTitleS3(e){
        let newValue = e.target.value;
        setTitleS3(newValue);
    }

    function ChangeOptionS4(e){
        let newValue = e.target.checked;
        setFilledOptionS4(newValue);
    }

    function ChangeDescS5(e){
        let newValue = e.target.value;
        setDescriptionS5(newValue);
    }

    function ChangeTitleS5(){
        setTitleS5(descriptionS5);
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

            <div className='section'>
                <h1> {titleS2} </h1>
                <input type='text' value={titleS2} onChange={ChangeTitleS2}/>
            </div>

            <div className='section'>
                <h1> {titleS3} </h1>
                <select onChange={ChangeTitleS3}>
                    <option>Selecione</option>
                    <option>Javascript</option>
                    <option>Html/Css</option>
                    <option>ReactJS</option>
                </select>
            </div>

            <div className='section'>
                <h1> Programar é uma lindezinha? {filledOptionS4  ? 'Sim' : 'Não'} </h1>
                <input type='checkbox' checked={filledOptionS4} onChange={ChangeOptionS4}/> Programar é uma lindezinha?
            </div>

            <div className='section'>
                <h1> {titleS5} </h1>

                <input type='text' value={descriptionS5} onChange={ChangeDescS5} />

                <button onClick={ChangeTitleS5}> Alterar </button>
            </div>
        </div>
    )
}