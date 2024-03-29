import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { StoreProvider } from 'easy-peasy';
import store from './store/configureStore';
// import 'bootstrap/dist/css/booststrap.css';


ReactDOM.render(<StoreProvider store={store}>
		<App />
</StoreProvider>,document.getElementById('root'));

