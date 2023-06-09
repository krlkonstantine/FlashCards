import React from 'react';
import {createRoot} from 'react-dom/client';
import {Provider} from 'react-redux';
import {store} from './app/store';
import App from 'app/App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import {GlobalError} from "common/components/GlobalError/GlobalError";

/*const container = document.getElementById('root')!;
const root = createRoot(container);*/

const router = createBrowserRouter([
    {
        path: "/",
        element: <div>Hello world!</div>,
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <>
        <RouterProvider router={router} />
        <Provider store={store}>
            <App/>
        </Provider>
    </>
);

/*root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>
);*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
