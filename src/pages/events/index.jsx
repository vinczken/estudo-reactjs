import './index.scss';

export default function Events() {

    function JustClicked() {
        alert('Hi, the user just clicked!');
    }

    function JustMovedMouse(){
        alert('Hi, the user just moved the mouse!');
    }

    function JustChangedTheInput(e){
        let newValue = e.target.value;
        alert('Hi, the user just changed the input value to: ' + newValue);
    }

    function JustChecked(e){
        let newValue = e.target.checked;
        alert('Hi, the user just changed the check value to: ' + newValue);
    }

    return (
        <div className='page-event page'>
            <header className='header'>
                <h1> ReactJS | Eventos </h1>
            </header>

            <section className='section'>
                <h1 onMouseMove={JustMovedMouse}> Entendendo Eventos </h1>

                <p onClick={JustClicked}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat, leo vitae congue fringilla, purus ante suscipit sapien, ut placerat ex orci in felis. Proin blandit neque nec congue varius. Phasellus odio eros, posuere sit amet enim ac, sodales pellentesque sapien. Proin pulvinar semper leo a venenatis. Fusce sagittis lectus vel pharetra malesuada. Nam maximus eu sem ut ornare. Praesent nisi justo, aliquam eu ipsum sit amet, lobortis rhoncus massa. In sit amet eros euismod, vulputate odio vitae, dictum sapien. Aliquam pellentesque diam et fringilla aliquet. Nulla vulputate ultrices risus, a ornare nibh dictum et.</p>
                <br />
                <input onChange={JustChangedTheInput} type='text' placeholder='Digite aqui alguma coisa' />

                <textarea onChange={JustChangedTheInput}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat, leo vitae congue fringilla, purus ante suscipit sapien, ut placerat ex orci in felis. Proin blandit neque nec congue varius. Phasellus odio eros, posuere sit amet enim ac, sodales pellentesque sapien. Proin pulvinar semper leo a venenatis. Fusce sagittis lectus vel pharetra malesuada. Nam maximus eu sem ut ornare. Praesent nisi justo, aliquam eu ipsum sit amet, lobortis rhoncus massa. In sit amet eros euismod, vulputate odio vitae, dictum sapien. Aliquam pellentesque diam et fringilla aliquet. Nulla vulputate ultrices risus, a ornare nibh dictum et.
                </textarea>

                <select>
                    <option> Selecione </option>
                    <option> Item A </option>
                    <option> Item B </option>
                </select>

                <div className='group'>
                    <input onChange={JustChecked} type='checkbox' /> Opção 1
                    <input onChange={JustChecked} type='checkbox' /> Opção 2
                </div>

                <div className='group'>
                    <div>
                        <input type='radio' name='gpo' /> Opção 1
                    </div>
                    <div>
                        <input type='radio' name='gpo' /> Opção 2
                    </div>
                </div>

                <button onClick={JustClicked}> Clique aqui </button>

            </section>
        </div>
    )
}