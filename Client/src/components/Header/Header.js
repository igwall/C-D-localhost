import React from 'react'
import styles from './Header.styles'
import PropTypes from 'prop-types'
import { Link, Redirect } from 'react-router-dom'
import { isAuthenticated } from '../../services/Authentication.services'
import constants from '../../constants'

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
      redirectTo: ''
    }
    this.redirectTo = this.redirectTo.bind(this)
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
        this.state.redirectTo !== ''
          ? <Redirect to={this.state.redirectTo} />
          : null
      }
      {
        isAuthenticated ? console.log('oui') : console.log('non')
      }
      <Link to='/'>
        <div className='brand' />
      </Link>

      <style jsx>{styles}</style>
    </div>
  }
}
