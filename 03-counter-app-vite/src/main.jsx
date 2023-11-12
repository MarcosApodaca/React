import React from 'react'
import ReactDom from "react-dom/client";
// import { CounterApp2 } from './CounterApp2';
//  import { CounterApp } from './CounterApp';
import { FirstApp } from './FirstApp';
// import { HelloApp } from './helloApp';

import './styles.css'

ReactDom.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        <FirstApp title='Hola soy vegeta'/>
    </React.StrictMode>
)

