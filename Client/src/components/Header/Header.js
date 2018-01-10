import React from 'react'
import styles from './Header.styles'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { isAuthenticated, logout } from '../../services/Authentication.services'
import constants from '../../constants'
import Icon from '../UI/Icon/Icon'

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
    }
  }

  redirectTo (url) {
    this.setState({
      redirectTo: url
    })
  }

  render () {
    return <div className='host' style={{
      backgroundColor: this.props.bgColor,
      color: this.props.color
    }}>
      {
        isAuthenticated()
          ? <div className='log-button' onClick={() => logout()}>
            <div className='log-icon'><Icon name='sign-out-alt' fontSize='15px' color='' /></div>
            <div className='log-text'>Déconnexion</div>
          </div>
          : <Link to='/login'>
            <div className='log-button'>
              <div className='log-icon'><Icon name='sign-in-alt' fontSize='15px' color='' /></div>
              <div className='log-text'>Connexion</div>
            </div>
          </Link>
      }
      <Link to='/'>
        <div className='brand' />
      </Link>

      <style jsx>{styles}</style>
    </div>
  }
}
