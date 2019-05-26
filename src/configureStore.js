import React from "react";
import {createStore, applyMiddleware, compose} from "redux";
import { middleware as reduxPackMiddleware } from 'redux-pack'
import thunk from "redux-thunk";
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import rootReducer from "./reducers";

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['firebase']
};

const persistedReducer = persistReducer(persistConfig, rootReducer)

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk, reduxPackMiddleware, logger),
  // other store enhancers if any
);

export const store = createStore(persistedReducer, enhancer);
export const persistor = persistStore(store);

export default {store, persistor};

