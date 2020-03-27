
//STEP 1
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';


//STEP 2
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';

//STEP 2
const store = createStore(reducer);

ReactDOM.render(
	//SETP 2
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root'));
