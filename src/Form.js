import Video from './Video'
import React from 'react';

// let globalState = '';

function Form({state, setState, goToVideoPage}) {
    return(
        <form>
            <label htmlFor={'my-input'}>Enter prompt: </label>
            <br />
            <br />
                <textarea rows="4" cols="50"
                id={'my-input'}
                type={'text'}
                class="input-box"
                value={state}
                placeholder={'How to...'}
                onChange={event => {
                    // globalState = event.target.value;
                    setState(event.target.value)
                    
                }}/>
            <br />
            <br />
            <div>
            <button onclick={"goToVideoPage()"}> GuideMe </button> 
            </div>
            
            {/* </nav> */}
            <br />
            <br />
            {/* { You entered: {state} } */}
        </form>
    )
}

export default Form;