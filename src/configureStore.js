import { createStore } from 'redux'
import rootReducer from './reducers'

// configure a simple store with a single reducer (intl)
const configureStore = () => {
    const store = createStore(
        rootReducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
    return store
}

export default configureStore
