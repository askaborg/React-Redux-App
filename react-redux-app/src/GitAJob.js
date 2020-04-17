import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import GitJobs from './components/GitJobs'
import { rootReducer } from './reducers/gitReduce'

const store = createStore(rootReducer, applyMiddleware(thunk))

export default function GitAJob() {
  return (
    <Provider store={store}>
        <h1>Git A Javascript Job!</h1>
        <GitJobs />
    </Provider>
  )
}
