import React, { Component } from 'react'
import Subheader from './Subheader'
import { FormattedMessage } from 'react-intl'

class Header extends Component {
    render() {
        const { name, unreadCount, lastLogin } = this.props

        return (
            <div>
                <div className='header'>
                    <h1>
                        <FormattedMessage
                            id="Header.welcomeMessage"
                            defaultMessage={' Welcome to your dashboard, {name}!' }
                            values={{
                                name
                            }}
                        />
                    </h1>
                </div>
                <Subheader
                    unreadCount={ unreadCount }
                    lastLogin={ lastLogin }
                />
            </div>
        )
    }
}

export default Header
