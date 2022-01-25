import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import axios from 'axios';
import { QueryClient, QueryClientProvider } from "react-query";
import "./i18n/index";

axios.defaults.baseURL = process.env.REACT_APP_API_URL

const queryClient = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>,
  document.getElementById('root')
);