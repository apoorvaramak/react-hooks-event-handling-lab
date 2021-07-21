// Code Keypad Component Here

function keyPadClicked(){
    console.log("Entering password...")
}

function KeyPad(){
    return(
        <form>
            <input type = "password" onChange = {keyPadClicked}/>
        </form>
    )
}

export default KeyPad;
