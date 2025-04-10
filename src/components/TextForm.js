import React, {useState} from "react";

export default function TextForm(props) {
    const handleUpClick = () =>{
        // console.log("Upper case was clicked" + text)
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to the specified function used","success")
    }
    const handleLoClick = () =>{
        // console.log("Upper case was clicked" + text)
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to the specified function used","success")
    }
    const handleSentenceClick = () =>{
        // console.log("Upper case was clicked" + text)
        let newText = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()
        setText(newText)
        props.showAlert("Converted to the specified function used","success")  
    }
    const handleResetClick = () =>{
        // console.log("Upper case was clicked" + text)
        let newText = ''
        setText(newText)
        props.showAlert("Converted to the specified function used","success")
    }
    const handleTitleClick = () =>{
        // console.log("Upper case was clicked" + text)
        let newText = ''
        let text_arr = text.split(' ')
        for (let i = 0; i < text_arr.length; i++) {
          const element = text_arr[i];
          newText = newText  + element[0].toUpperCase() + element.slice(1) + ' '
        }
        setText(newText)
        props.showAlert("Converted to the specified function used","success")
    }
    const handleOnChange = (event) =>{
        // console.log("On change");
        setText(event.target.value);
    }
    const [text, setText] = useState("");
    // setText("Enter new text here");
    return (
      <>
        <div className="container">
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          value={text}
          onChange={handleOnChange}
          style={{backgroundColor : props.mode==='dark'?'grey':'white'}}
        ></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to upper-case</button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to lower-case</button>
      <button className="btn btn-primary mx-2" onClick={handleSentenceClick}>Convert to sentence-case</button>
      <button className="btn btn-primary mx-2" onClick={handleTitleClick}>Convert to title-case</button>
      <button className="btn btn-primary mx-2" onClick={handleResetClick}>Reset</button>
    </div>
    <div className="container my-3">
      <h1>Text summary</h1>
      <p>{(text.split(" ").length)-1} words and {text.length} characters</p>
      <p>{0.008 * (text.split(" ").length-1)} minutes required to read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter some text to preview it here"}</p>
    </div>
    </>
  );
}

//Exercise 1 - to enchance the app by adding more functions to the text.