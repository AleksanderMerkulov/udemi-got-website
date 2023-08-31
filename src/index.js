import React from 'react';
import ReactDOM from 'react-dom/client';
import {router as rout} from "./router";

import {
    RouterProvider,
} from "react-router-dom";

import './index.css';
import App from './App';

const router = rout

const root = ReactDOM.createRoot(document.querySelector('body'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
