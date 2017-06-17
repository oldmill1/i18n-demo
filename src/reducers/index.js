import { combineReducers } from 'redux'
import { allMessages } from '../messages'
import { allowedLangauges } from '../languages'

const initialState = {
    defaultLocale: 'en',
    locale: 'en',
    messages: allMessages['en'],
}

const intlReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_LOCALE':
            if (allowedLangauges.includes(action.locale)) {
               return {
                    ...state,
                    locale: action.locale,
                    messages: allMessages[action.locale]
                }
            } else {
                return state
            }
        default:
            return state
    }
}

const demoReducer = (state = {}, action) => {
    return state
}

const reducers = {
    demoReducer,
    intl: intlReducer
}

const rootReducer = combineReducers(reducers)

export default rootReducer
