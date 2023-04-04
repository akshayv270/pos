import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { Provider } from 'react-redux'

import App from './App'
//import rootReducer from './reducers'
import rootReducer from './Login/reducers'

//import rootSaga from './sagas'
import rootSaga from './Login/sagas'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(rootSaga)

const action = (type, payload) => {
  console.log('dispatch', { type, payload });
  store.dispatch({ type, payload });
}

ReactDOM.render(
  <Provider store={store}>
    <App
      onSubmit={({ username, password }) => action('LOGIN_REQUESTED', { username, password })}
      onLogout={() => action('LOGOUT_REQUESTED')}
    />
  </Provider>,
  document.getElementById('root')
)
