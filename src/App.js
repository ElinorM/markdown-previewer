import React ,{ Component } from 'react';
import Showdown from 'showdown';
import Editor from './components/Editor/Editor';
import Preview from './components/Preview/Preview';
import './App.css';

const converter = new Showdown.Converter(); 

class App extends Component {
  constructor () {
    super();
    this.state = {
      input: '',
      htmlText: ''
    }
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
    this.setState({htmlText: converter.makeHtml(this.state.input)});
  }

  render() {
    const {htmlText} = this.state;
    return (
      <div className="App">
        <Editor id='editor' onInputChange={this.onInputChange}/>
        <Preview id='preview' htmlText={htmlText}/> 
      </div>
    );
  }
}

export default App;
