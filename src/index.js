import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App/App';
import reportWebVitals from './reportWebVitals';
import Store from "./App/Store";
import {Provider} from "react-redux"
import store from "./App/Store";
import {fetchCDs} from "./Slices/CDSlice";
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "./dev";

store.dispatch(fetchCDs)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Provider store={Store}>
			<DevSupport ComponentPreviews={ComponentPreviews}
			            useInitialHook={useInitial}
			>
				<App/>
			</DevSupport>
		</Provider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
