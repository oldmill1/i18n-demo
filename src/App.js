import React from 'react'
import Header from './Header'
import LangPicker from './LangPicker'

const App = () => {
    return (
        <div>
            <Header
                name={ 'Ankur Taxali' }
                unreadCount={ '2' }
            />
            <LangPicker />
        </div>
    )
}

export default App
