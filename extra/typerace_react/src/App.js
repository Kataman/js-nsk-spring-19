import React, { Component } from 'react';
import './App.css';
import Timer from './components/Timer'; // таймер - отдельный компонент


class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      text: ''
    }
  }

  componentWillMount() {
    this.showText();
  }

  showText = () => { // подгружаем текст
      let t = this;
      let xhr = new XMLHttpRequest();
      xhr.open('GET', 'https://fish-text.ru/get?type=sentence&number=1', true);
      xhr.onload = function() {
          let result = JSON.parse(this.responseText);
              if (result.status === 'success') {
                t.setState({text: result.text});
                return true;
              } 
              else {
                t.setState({text: result.errorCode + '\n' + result.text});
                return false;
              }
      };
      xhr.onerror = () => {
          alert('Ошибка ' + this.status);
      };
      xhr.send();
  }

  render () { 
      return (
      <div className="App">
      <div>Текст: {this.state.text}</div>
      <Timer time="15"></Timer> 
      </div>
    );
  }
}

export default App;
