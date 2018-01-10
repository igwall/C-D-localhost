import React from 'react'
import styles from './Profile.styles'
import {connect} from 'react-redux'

@connect(store => {
  return {
    currentUser: store.currentUser
  }
})

export default class Profile extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount () {
  }

  render () {
    // const { username, email, realisations } = this.props.user
    return (<div className='host'>
      <h1>Rooms</h1>

      <style jsx>{styles}</style>
    </div>
    )
  }
}
