import React from 'react'
import styles from './Header.styles'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import { logout, isAuthenticatedSimple } from '../../services/Authentication.services'
import { setQuotes } from '../../store/actions/quote.action'
import constants from '../../constants'
import DropDown from '../UI/DropDown/DropDown'
import Icon from '../UI/Icon/Icon'

@connect(store => {
  return {
    currentUser: store.currentUser,
    quotes: store.quotes.elements
  }
})

export default class Header extends React.Component {
  static propTypes = {
    bgColor: PropTypes.any,
    currentUser: PropTypes.any,
    color: PropTypes.any
  }

  static defaultProps = {
    bgColor: constants.HEADER_COLOR,
    color: constants.HEADER_TEXT_COLOR
  }

  constructor (props) {
    super(props)
    this.state = {
      isAuthenticatedSimple: isAuthenticatedSimple(),
      redirectTo: ''
    }
  }

  componentDidMount () {
    setQuotes().then(() => {
    }).catch(err => {
      console.log(err)
    })
  }

  redirectTo (url) {
    this.setState({
      redirectTo: url
    })
  }

  getRandomQuote () {
    const quotes = this.props.quotes
    const quote = quotes[Math.floor(Math.random() * Math.floor(quotes.length))]
    return quote
  }

  render () {
    const redirectTo = this.state.redirectTo
    if (redirectTo && window.location.pathname !== redirectTo) {
      return (
        <Redirect to={redirectTo} state={{ from: redirectTo }} />
      )
    }
    const isAuthenticated = this.state.isAuthenticatedSimple
    const { currentUser } = this.props
    const quote = this.getRandomQuote()
    return <div className='host'>
      <Link to='/' style={{height: '100%'}}>
        <div className='logo-container'>
          <img className='logo' src='/hut_logo.png' alt='hut_logo' height='150px' />
        </div>
      </Link>
      <div className='header-container'>
        <Link to='/' style={{height: '100%'}}>
          <div className='app-name'>COMPOSE & DANSE</div>
        </Link>
        {
          quote !== undefined
            ? <div className='quote-container'>
              <div className='quote-title'>CITATION DU MOMENT</div>
              <span className='quote-text'>"{quote.text}"</span>
              <span className='quote-author'>{quote.author}</span>
            </div>
            : undefined
        }

        <div className='navbar'>
          <div className='menu-button-group'>
            <Link to='/' style={{height: '100%'}} >
              <div className='menu-button'>
                <div className='menu-button-text'>ACCUEIL</div>
              </div>
            </Link>
            <Link to='/recipes' style={{height: '100%'}} >
              <div className='menu-button'>
                <div className='menu-button-text'>COMPOSITIONS</div>
              </div>
            </Link>
            <Link to='/library' style={{height: '100%'}} >
              <div className='menu-button'>
                <div className='menu-button-text'>BIBLIOTHÈQUE</div>
              </div>
            </Link>
            {
              isAuthenticated
                ? <Link to={`/user/${this.props.currentUser._id}`} style={{height: '100%'}}>
                  <div className='menu-button'>
                    <div className='menu-button-text'>MON PROFIL</div>
                  </div>
                </Link>
                : undefined
            }
            <div className='menu-button-plus'>
              <DropDown
                orientation='left'
                menuElements={[
                  {
                    action: () => { this.redirectTo('/about/') },
                    placeholder: 'À Propos'
                  },
                  {
                    action: () => { this.redirectTo('/guestbook/') },
                    placeholder: "Livre d'or"
                  },
                  {
                    action: () => { this.redirectTo('/contact/') },
                    placeholder: 'Nous contacter'
                  },
                  {
                    action: () => { this.redirectTo('/collaboration/') },
                    placeholder: currentUser.collaborator !== '' ? 'Mon interface collaborateur' : ' Demande de Collaboration'
                  },
                  {
                    action: () => { this.redirectTo('/admin/') },
                    placeholder: 'Administration'
                  }
                ]}
              >
                <div className='menu-button' style={{height: '43px', padding: '0 15px'}}>
                  <div className='menu-button-icon'>
                    <Icon name='plus' fontSize='18px' color='' />
                  </div>
                </div>
              </DropDown>
            </div>
          </div>
          {
            isAuthenticated
              ? <div className='sign-button-group'>
                <div className='user-infos'>
                  <span>Bienvenue</span>
                  <Link to={`/user/${this.props.currentUser._id}`}>
                    <div className='user-username'>{this.props.currentUser.username}</div>
                  </Link>
                </div>
                <div className='sign-button' onClick={() => logout()}>
                  <div className='sign-button-icon'><Icon name='sign-out-alt' fontSize='15px' color='' /></div>
                  <div className='sign-button-text'>Déconnexion</div>
                </div>
              </div>
              : <div className='sign-button-group'>
                <Link to='/register' style={{height: '100%'}} >
                  <div className='sign-button'>
                    <div className='sign-button-icon'><Icon name='user-plus' fontSize='15px' color='' /></div>
                    <div className='sign-button-text'>Inscription</div>
                  </div>
                </Link>
                <Link to='/login' style={{height: '100%'}} >
                  <div className='sign-button'>
                    <div className='sign-button-icon'><Icon name='sign-in-alt' fontSize='15px' color='' /></div>
                    <div className='sign-button-text'>Connexion</div>
                  </div>
                </Link>
              </div>
          }
        </div>
        <Link to='/'>
          <div className='brand' />
        </Link>
      </div>
      <style jsx>{styles}</style>
    </div>
  }
}
