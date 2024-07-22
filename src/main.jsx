import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {Provider} from "react-redux";
import createSagaMiddleware from "redux-saga";
import {configureStore} from "@reduxjs/toolkit";
import catReducer from "./Setstate.jsx";
import ApiFetch from "./Saga.jsx";

const saga = createSagaMiddleware();
const store = configureStore({
  reducer: {
    cat: catReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({thunk: false}).concat(saga),
});
saga.run(ApiFetch);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
