import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import Appuseref from './components/useref-demo';
// import Todos from './components/use-reducer';
import reportWebVitals from './reportWebVitals';
import Dataserve from './components/studentdata';
// import Dataserve from './components/studentdata';
// import Student from './components/studentdata';
// import App1 from './components/App1';


ReactDOM.render(
  <React.StrictMode>
    <Dataserve />
  </React.StrictMode>,
  document.getElementById('root')
);


// ReactDOM.render(
//   <React.StrictMode>
//     <App1 />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
