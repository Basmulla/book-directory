import React from 'react';
import {createRoot} from 'react-dom/client';
import { Provider } from 'react-redux';
import configureStore from './store';
import './index.css';
import App from './App';

const store = configureStore();
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
    <Provider store={store}>
    <App />
    </Provider>
);

