import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () =>{
        // console.log("text tranfrom to upperase");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", "success")

    }
    const letterOnChange = (event) =>{
        // console.log("this is uppercase");
        setText(event.target.value)
    }
const [text, setText] = useState('');
    // setText("Enter new text");/

    const handleDownClick = () => {
     let newText = text.toLowerCase();
     setText(newText);    
     props.showAlert("Converted to Lowercase", "success")
    }

    const handleOnCopy = () => {
        let text = document.getElementById('Text-Copied');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Converted to Text-Copy", "success")
    }

    const handleOnClear = () => {
        let newText = '';
        setText(newText);
        props.showAlert("The Text is Clear", "success")
    }

    return (
        <>
        <div className='container' style={{color:props.mode ==='light'?'black':'white'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id='Text-Copied' onChange={letterOnChange} style={{backgroundColor:props.mode ==='light'?'white':'grey', color:props.mode === 'light'?'black':'white'}} value={text} rows="3"></textarea>
            </div>
            <button disabled={text.length===0} className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to uppercase</button>
            <button disabled={text.length===0} className='btn btn-primary mx-2' onClick={handleDownClick}>Convert to lowercase</button>
            <button disabled={text.length===0} className='btn btn-primary mx-2' onClick={handleOnCopy}>Copy Text</button>
            <button disabled={text.length===0} className='btn btn-primary mx-2' onClick={handleOnClear}>Clear Text</button>
        </div>
        <div className='container my-3' style={{color:props.mode ==='light'?'black':'white'}}>
            <h1>Your text summary</h1>
            <p>Your words {text.split(" ").filter((element)=>{return element.length!==0}).length},  chracter {text.length}</p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minute Read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"No thing"}</p>
        </div>
        </>
    )
}
