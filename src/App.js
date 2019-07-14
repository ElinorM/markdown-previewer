import React ,{ Component } from 'react';
import Showdown from 'showdown';
import Editor from './components/Editor/Editor';
import Preview from './components/Preview/Preview';
import './App.css';

const converter = new Showdown.Converter(); 

//Markdown Default Input
const mdHeader1 = '#H1   ';
const mdHeader2 = '##H2   ';
const mdLink = '[A link](https://www.google.com)   ';
const mdInlineCode= 'Inline `code`   ';
const mdCodeBlock = '```javascript\nvar s = "JavaScript syntax highlighting";\n;```   ';
const mdListItem = '1. First ordered list item   ';
const mdBlockquote = '>Blockquote.   ';
const mdImage = '![IMAGE ALT TEXT HERE](http://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg)   ';
const mdBoldedText = '**Bolded text**    ';

const mdInput = mdHeader1 + "\n" + 
  mdHeader2 + "\n" + 
  mdLink + "\n" + 
  mdInlineCode + "\n" + 
  mdCodeBlock + "\n" + 
  mdListItem + "\n" + 
  mdBlockquote + "\n" + 
  mdImage + "\n" + 
  mdBoldedText;

class App extends Component {
  constructor () {
    super();
    this.state = {
      input: mdInput,
      htmlText: ''
    }
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
    this.setState({htmlText: converter.makeHtml(this.state.input)});
  }

  render() {
    const {input} = this.state;
    const htmlText = converter.makeHtml(this.state.input);
    
    return (
      <div className="App">
        <Editor  input={input} onInputChange={this.onInputChange}/>
        <Preview id='preview' htmlText={htmlText}/> 
      </div>
    );
  }
}

export default App;
