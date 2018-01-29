import React from 'react'
import styles from './CollaborationRequest.styles'
import {connect} from 'react-redux'
import {dateFormatter} from '../../util/dateFormatter'
import Button from '../UI/Button/Button'
import { sendCollaborationRequest } from '../../store/actions/collaborationRequest.action'
import { setProfile } from '../../services/Authentication.services'

@connect(store => {
  return {
    currentUser: store.currentUser
  }
})

export default class HomePage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount () {
  }

  render () {
    const { currentUser } = this.props.currentUser
    return (
    )
  }
}
