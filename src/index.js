import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './app.js';
import Header from './components/todo/header.js';
class Main extends React.Component {
  render() {
    return(
      <>
      <Header/>
      <App />
      </>
      )
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);
