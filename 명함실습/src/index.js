import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Banner from './components/Banner';
import Toggle from './components/Toggle';
import SimpleForm from './components/SimpleForm';
import UnControledForm from './components/UnControledForm';
import CatParent from './components/CatParent';
import ToDoList from './components/ToDoList';
import OnlneStore from './components/OnlineStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <OnlneStore />
  </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
