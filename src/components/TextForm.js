import React , {useState} from 'react'

export default function TextForm(props) {
    const [text,setText]=useState('');
    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!" , "success");
    }
    const handleLoClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!" , "success");
    }
    const handleCopy = () =>{
        // let text = document.getElementById("myBox");
        // text.select();
        navigator.clipboard.writeText(text);
        // document.getSelection().removeAllRanges();
        props.showAlert("Copied to clipboard!" , "success");
    }
    const handleExtraSpace = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!" , "success");
    }
    // const handleBoldClick = () =>{
    //     let newText = <b>text</b>;
    //     setText(newText);
    // }
    // const handleItalicClick = () =>{
    //     let newText = <i>text</i>;
    //     setText(newText);
    // }
    const handleClearClick = () =>{
        let newText = '';
        setText(newText);
        props.showAlert("Text cleared!" , "success");
    }
    const handleOnChange = (event) =>{
        setText(event.target.value);
    }
    
  return (
    <>
    <div className='container' style={{color: props.mode==='light'?'#042743':'white'}}>
        <h1 className='mb-4'>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'#13466e',color: props.mode==='light'?'#042743':'white'}} id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpace}>Remove Extra Space</button>
        {/* <button className="btn btn-primary mx-1" onClick={handleBoldClick}>Bold</button>
        <button className="btn btn-primary mx-1" onClick={handleItalicClick}>Italic</button> */}
    </div>
    <div className='container my-3' style={{color: props.mode==='light'?'#042743':'white'}}>
        <h2>Your text summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Nothing to preview!'}</p>
    </div>
    </>
  )
}
