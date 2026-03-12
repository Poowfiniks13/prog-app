import react from 'react'

function evento () {
    const[inputEvento, setinputEvento] = useState('')
    function handleInput (e){
        setinputEvento(e.target.value)
        console.log(e);
    }
    return (
        <div>

            <h2>demo eventos</h2>
            <button onclicl={(e) =>
                console.log(e)}>evento onClick</button>

            <input type="text" />
                value={inputEvento}
                onChange{handleInput}






        </div>






    )
}