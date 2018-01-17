import React from 'react'
import styles from './Header.styles'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import { isAuthenticated, logout } from '../../services/Authentication.services'
import constants from '../../constants'
import Icon from '../UI/Icon/Icon'

@connect(store => {
  return {
    currentUser: store.currentUser
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
      isAuthenticated: isAuthenticated()
    }
  }

  redirectTo (url) {
    this.setState({
      redirectTo: url
    })
  }

  render () {
    const isAuthenticated = this.state.isAuthenticated
    return <div className='host'>
      <div className='navbar'>
        <div className='menu-button-group'>
          <Link to='/' style={{height: '100%'}} >
            <div className='menu-button'>
              <div className='menu-button-text'>ACCUEIL</div>
            </div>
          </Link>
          <Link to='/recipes' style={{height: '100%'}} >
            <div className='menu-button'>
              <div className='menu-button-text'>RECETTES</div>
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
        </div>
        {
          isAuthenticated
            ? <div className='sign-button-group'>
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
      <style jsx>{styles}</style>
    </div>
  }
}
