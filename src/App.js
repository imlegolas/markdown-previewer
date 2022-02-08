import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import { Component } from 'react/cjs/react.production.min';
import { marked } from 'marked';


const initialState = `
  This is a paragraph

  **This is bolded text**

  > Block Quote!

  # Heading
  ## Heading 2

  - List item 1
  - List item 2
  - List item 3

  [This is a link](https://google.com)

  This is an inline \`<div></div>\`

  This is a block of code
  \`\`\`
    let x = 1;
    let y = 2;
    let z = x + y;
  \`\`\`

  ![Codecamp](https://icons-for-free.com/iconfiles/png/512/design+development+facebook+framework+mobile+react+icon-1320165723839064798.png)
`;

class App extends Component
{
  state = {
    text: initialState
  }

  handleChange = (e) =>
  {
    this.setState({
      text: e.target.value
    })
  }

  render()
  {
    const { text } = this.state;
    const markdown = marked(text, { breaks: true });



    return (

      <div className="App">
        <div className="mainContent">
          <div className="editor" >
            <h2 className="titleText">Editor</h2>

            <textarea className="textareaInput" id="editor" value={text} onChange={this.handleChange}>

            </textarea>
          </div>
          <div className="previewer" >
            <h2 className="titleText">Previewer</h2>

            {/* <div dangerouslySetInnerHTML={{__html: markdown}}></div> */}
            <p id="preview" className="textarea" dangerouslySetInnerHTML={{ __html: markdown }}>

            </p>
          </div>
        </div>

      </div>
    );
  }



}

export default App;
