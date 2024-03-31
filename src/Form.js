
function Form({state, setState}) {
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
                    setState(event.target.value)
                }}/>
            <br />
            <br />
            <button onclick="myFunction()"> GuideMe </button>
            <br />
            <br />
            {/* You entered: {state} */}
        </form>
    )
}

export default Form;