import React from 'react'
import { connect } from 'react-redux'
import { setLocale } from './actions'
import { setLanguageCookie } from './utils'

const LangPicker = ({
    setLocale,
    locale
}) => {

    const updateLocale = (e) => {
        setLocale(e.target.value)
        setLanguageCookie(e.target.value)
    }

    return (
        <div>
            <select value={locale} onChange={updateLocale}>
                <option value="en">English</option>
                <option value="it">Italian</option>
            </select>
        </div>
    )
}

const mapStateToProps = (state) => ({
    locale: state.intl.locale
})

const mapDispatchToProps = (dispatch) => {
    return {
        setLocale: (locale) => {
            dispatch(setLocale(locale))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LangPicker)
