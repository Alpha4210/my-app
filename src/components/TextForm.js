import React, {useState} from "react";



export default function TextForm(props) {
    const handleUpClick = () =>{
        // console.log("Upper case was clicked" + text)
        let newText = text.toUpperCase()
        setText(newText)
    }
    const handleLoClick = () =>{
        // console.log("Upper case was clicked" + text)
        let newText = text.toLowerCase()
        setText(newText)
    }
    const handleSentenceClick = () =>{
        // console.log("Upper case was clicked" + text)
        let newText = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()
        setText(newText)  
    }
    const handleResetClick = () =>{
        // console.log("Upper case was clicked" + text)
        let newText = ''
        setText(newText)
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
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} minutes required to read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  );
}

//Exercise 1 - to enchance the app by adding more functions to the text.