import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './configureStore'

import App from './App'
import { addLocaleData } from 'react-intl'
import { IntlProvider } from 'react-intl-redux'
import { Provider } from 'react-redux'
import { setLocale } from './actions'
import { getQueryString, getLanguageCookie, getBrowserLanguage } from './utils'
import qs from 'qs'
import { allowedLangauges } from './languages'

const store = configureStore()

import en from 'react-intl/locale-data/en'
import it from 'react-intl/locale-data/it'
addLocaleData([...en, ...it])

if (getQueryString()) {
    const parsedQueryStringObject = qs.parse((getQueryString()).replace('?', ''))
    if (allowedLangauges.includes(parsedQueryStringObject['lang'])) {
        store.dispatch(setLocale(parsedQueryStringObject['lang']))
    }
} else if (getLanguageCookie()) {
    if (allowedLangauges.includes(getLanguageCookie())) {
        store.dispatch(setLocale(getLanguageCookie()))
    }
} else {
    const browserLanguage = getBrowserLanguage()

    if (allowedLangauges.includes(browserLanguage)) {
        store.dispatch(setLocale(browserLanguage))
    }
}

ReactDOM.render(
    <Provider store={store}>
        <IntlProvider>
            <App />
        </IntlProvider>
    </Provider>,
    document.getElementById('root')
);
